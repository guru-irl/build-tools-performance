import React from 'react';
const LABEL_2061 = 'component_2061';
export function Component2061({ value = 2061, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2061, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2061, 'data-value': derived.doubled }, children);
}
export default Component2061;
