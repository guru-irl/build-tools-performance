import React from 'react';
const LABEL_16898 = 'component_16898';
export function Component16898({ value = 16898, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16898, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16898, 'data-value': derived.doubled }, children);
}
export default Component16898;
