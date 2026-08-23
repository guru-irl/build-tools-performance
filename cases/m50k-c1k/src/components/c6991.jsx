import React from 'react';
const LABEL_6991 = 'component_6991';
export function Component6991({ value = 6991, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6991, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6991, 'data-value': derived.doubled }, children);
}
export default Component6991;
