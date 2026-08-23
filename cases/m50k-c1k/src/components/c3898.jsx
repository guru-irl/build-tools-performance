import React from 'react';
const LABEL_3898 = 'component_3898';
export function Component3898({ value = 3898, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3898, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3898, 'data-value': derived.doubled }, children);
}
export default Component3898;
