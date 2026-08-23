import React from 'react';
const LABEL_23383 = 'component_23383';
export function Component23383({ value = 23383, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23383, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23383, 'data-value': derived.doubled }, children);
}
export default Component23383;
