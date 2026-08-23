import React from 'react';
const LABEL_2013 = 'component_2013';
export function Component2013({ value = 2013, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2013, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2013, 'data-value': derived.doubled }, children);
}
export default Component2013;
