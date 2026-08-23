import React from 'react';
const LABEL_12307 = 'component_12307';
export function Component12307({ value = 12307, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12307, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12307, 'data-value': derived.doubled }, children);
}
export default Component12307;
