import React from 'react';
const LABEL_15299 = 'component_15299';
export function Component15299({ value = 15299, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15299, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15299, 'data-value': derived.doubled }, children);
}
export default Component15299;
