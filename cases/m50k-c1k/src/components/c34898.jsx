import React from 'react';
const LABEL_34898 = 'component_34898';
export function Component34898({ value = 34898, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34898, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34898, 'data-value': derived.doubled }, children);
}
export default Component34898;
