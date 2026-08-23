import React from 'react';
const LABEL_20273 = 'component_20273';
export function Component20273({ value = 20273, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20273, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20273, 'data-value': derived.doubled }, children);
}
export default Component20273;
