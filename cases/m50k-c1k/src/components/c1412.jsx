import React from 'react';
const LABEL_1412 = 'component_1412';
export function Component1412({ value = 1412, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1412, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1412, 'data-value': derived.doubled }, children);
}
export default Component1412;
