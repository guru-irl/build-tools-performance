import React from 'react';
const LABEL_12476 = 'component_12476';
export function Component12476({ value = 12476, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12476, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12476, 'data-value': derived.doubled }, children);
}
export default Component12476;
