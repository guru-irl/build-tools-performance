import React from 'react';
const LABEL_45821 = 'component_45821';
export function Component45821({ value = 45821, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45821, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45821, 'data-value': derived.doubled }, children);
}
export default Component45821;
