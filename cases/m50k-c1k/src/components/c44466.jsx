import React from 'react';
const LABEL_44466 = 'component_44466';
export function Component44466({ value = 44466, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44466, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44466, 'data-value': derived.doubled }, children);
}
export default Component44466;
