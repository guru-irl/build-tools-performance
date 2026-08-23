import React from 'react';
const LABEL_40925 = 'component_40925';
export function Component40925({ value = 40925, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40925, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40925, 'data-value': derived.doubled }, children);
}
export default Component40925;
