import React from 'react';
const LABEL_20926 = 'component_20926';
export function Component20926({ value = 20926, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20926, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20926, 'data-value': derived.doubled }, children);
}
export default Component20926;
