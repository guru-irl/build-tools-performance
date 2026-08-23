import React from 'react';
const LABEL_12716 = 'component_12716';
export function Component12716({ value = 12716, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12716, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12716, 'data-value': derived.doubled }, children);
}
export default Component12716;
