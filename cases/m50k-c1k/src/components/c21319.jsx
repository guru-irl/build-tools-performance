import React from 'react';
const LABEL_21319 = 'component_21319';
export function Component21319({ value = 21319, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21319, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21319, 'data-value': derived.doubled }, children);
}
export default Component21319;
