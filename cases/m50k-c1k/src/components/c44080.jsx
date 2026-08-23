import React from 'react';
const LABEL_44080 = 'component_44080';
export function Component44080({ value = 44080, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44080, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44080, 'data-value': derived.doubled }, children);
}
export default Component44080;
