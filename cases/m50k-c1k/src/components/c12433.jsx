import React from 'react';
const LABEL_12433 = 'component_12433';
export function Component12433({ value = 12433, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12433, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12433, 'data-value': derived.doubled }, children);
}
export default Component12433;
