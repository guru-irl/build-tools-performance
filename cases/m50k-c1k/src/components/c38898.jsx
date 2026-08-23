import React from 'react';
const LABEL_38898 = 'component_38898';
export function Component38898({ value = 38898, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38898, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38898, 'data-value': derived.doubled }, children);
}
export default Component38898;
