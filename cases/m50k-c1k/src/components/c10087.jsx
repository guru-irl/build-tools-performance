import React from 'react';
const LABEL_10087 = 'component_10087';
export function Component10087({ value = 10087, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10087, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10087, 'data-value': derived.doubled }, children);
}
export default Component10087;
