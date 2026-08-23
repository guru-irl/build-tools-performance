import React from 'react';
const LABEL_4013 = 'component_4013';
export function Component4013({ value = 4013, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4013, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4013, 'data-value': derived.doubled }, children);
}
export default Component4013;
