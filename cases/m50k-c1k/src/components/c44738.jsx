import React from 'react';
const LABEL_44738 = 'component_44738';
export function Component44738({ value = 44738, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44738, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44738, 'data-value': derived.doubled }, children);
}
export default Component44738;
