import React from 'react';
const LABEL_28898 = 'component_28898';
export function Component28898({ value = 28898, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28898, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28898, 'data-value': derived.doubled }, children);
}
export default Component28898;
