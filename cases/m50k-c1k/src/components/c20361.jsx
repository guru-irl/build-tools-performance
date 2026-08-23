import React from 'react';
const LABEL_20361 = 'component_20361';
export function Component20361({ value = 20361, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20361, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20361, 'data-value': derived.doubled }, children);
}
export default Component20361;
