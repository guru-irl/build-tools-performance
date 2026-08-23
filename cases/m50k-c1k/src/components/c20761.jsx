import React from 'react';
const LABEL_20761 = 'component_20761';
export function Component20761({ value = 20761, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20761, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20761, 'data-value': derived.doubled }, children);
}
export default Component20761;
