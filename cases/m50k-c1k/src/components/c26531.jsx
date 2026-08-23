import React from 'react';
const LABEL_26531 = 'component_26531';
export function Component26531({ value = 26531, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26531, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26531, 'data-value': derived.doubled }, children);
}
export default Component26531;
