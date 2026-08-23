import React from 'react';
const LABEL_466 = 'component_466';
export function Component466({ value = 466, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_466, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_466, 'data-value': derived.doubled }, children);
}
export default Component466;
