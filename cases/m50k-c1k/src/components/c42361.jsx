import React from 'react';
const LABEL_42361 = 'component_42361';
export function Component42361({ value = 42361, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42361, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42361, 'data-value': derived.doubled }, children);
}
export default Component42361;
