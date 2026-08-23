import React from 'react';
const LABEL_3383 = 'component_3383';
export function Component3383({ value = 3383, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3383, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3383, 'data-value': derived.doubled }, children);
}
export default Component3383;
