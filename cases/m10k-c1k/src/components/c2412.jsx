import React from 'react';
const LABEL_2412 = 'component_2412';
export function Component2412({ value = 2412, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2412, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2412, 'data-value': derived.doubled }, children);
}
export default Component2412;
