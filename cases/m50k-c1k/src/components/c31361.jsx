import React from 'react';
const LABEL_31361 = 'component_31361';
export function Component31361({ value = 31361, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31361, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31361, 'data-value': derived.doubled }, children);
}
export default Component31361;
