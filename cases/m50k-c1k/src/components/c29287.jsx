import React from 'react';
const LABEL_29287 = 'component_29287';
export function Component29287({ value = 29287, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29287, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29287, 'data-value': derived.doubled }, children);
}
export default Component29287;
