import React from 'react';
const LABEL_1898 = 'component_1898';
export function Component1898({ value = 1898, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1898, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1898, 'data-value': derived.doubled }, children);
}
export default Component1898;
