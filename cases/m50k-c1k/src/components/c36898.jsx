import React from 'react';
const LABEL_36898 = 'component_36898';
export function Component36898({ value = 36898, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36898, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36898, 'data-value': derived.doubled }, children);
}
export default Component36898;
