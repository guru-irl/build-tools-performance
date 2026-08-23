import React from 'react';
const LABEL_1911 = 'component_1911';
export function Component1911({ value = 1911, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1911, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1911, 'data-value': derived.doubled }, children);
}
export default Component1911;
