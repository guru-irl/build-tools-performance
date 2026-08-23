import React from 'react';
const LABEL_20087 = 'component_20087';
export function Component20087({ value = 20087, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20087, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20087, 'data-value': derived.doubled }, children);
}
export default Component20087;
