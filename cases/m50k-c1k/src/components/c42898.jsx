import React from 'react';
const LABEL_42898 = 'component_42898';
export function Component42898({ value = 42898, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42898, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42898, 'data-value': derived.doubled }, children);
}
export default Component42898;
