import React from 'react';
const LABEL_46263 = 'component_46263';
export function Component46263({ value = 46263, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46263, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46263, 'data-value': derived.doubled }, children);
}
export default Component46263;
