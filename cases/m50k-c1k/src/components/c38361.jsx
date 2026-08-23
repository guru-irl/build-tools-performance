import React from 'react';
const LABEL_38361 = 'component_38361';
export function Component38361({ value = 38361, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38361, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38361, 'data-value': derived.doubled }, children);
}
export default Component38361;
