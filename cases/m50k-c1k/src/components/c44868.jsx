import React from 'react';
const LABEL_44868 = 'component_44868';
export function Component44868({ value = 44868, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44868, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44868, 'data-value': derived.doubled }, children);
}
export default Component44868;
