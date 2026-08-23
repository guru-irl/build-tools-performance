import React from 'react';
const LABEL_26898 = 'component_26898';
export function Component26898({ value = 26898, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26898, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26898, 'data-value': derived.doubled }, children);
}
export default Component26898;
