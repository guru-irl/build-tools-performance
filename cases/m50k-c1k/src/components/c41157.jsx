import React from 'react';
const LABEL_41157 = 'component_41157';
export function Component41157({ value = 41157, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41157, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41157, 'data-value': derived.doubled }, children);
}
export default Component41157;
