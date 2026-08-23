import React from 'react';
const LABEL_44087 = 'component_44087';
export function Component44087({ value = 44087, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44087, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44087, 'data-value': derived.doubled }, children);
}
export default Component44087;
