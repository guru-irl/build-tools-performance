import React from 'react';
const LABEL_12274 = 'component_12274';
export function Component12274({ value = 12274, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12274, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12274, 'data-value': derived.doubled }, children);
}
export default Component12274;
