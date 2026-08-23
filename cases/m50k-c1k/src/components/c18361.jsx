import React from 'react';
const LABEL_18361 = 'component_18361';
export function Component18361({ value = 18361, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18361, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18361, 'data-value': derived.doubled }, children);
}
export default Component18361;
