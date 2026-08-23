import React from 'react';
const LABEL_19898 = 'component_19898';
export function Component19898({ value = 19898, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19898, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19898, 'data-value': derived.doubled }, children);
}
export default Component19898;
