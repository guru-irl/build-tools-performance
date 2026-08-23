import React from 'react';
const LABEL_12873 = 'component_12873';
export function Component12873({ value = 12873, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12873, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12873, 'data-value': derived.doubled }, children);
}
export default Component12873;
