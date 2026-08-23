import React from 'react';
const LABEL_5013 = 'component_5013';
export function Component5013({ value = 5013, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5013, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5013, 'data-value': derived.doubled }, children);
}
export default Component5013;
