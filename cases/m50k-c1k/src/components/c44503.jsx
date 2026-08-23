import React from 'react';
const LABEL_44503 = 'component_44503';
export function Component44503({ value = 44503, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44503, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44503, 'data-value': derived.doubled }, children);
}
export default Component44503;
