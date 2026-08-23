import React from 'react';
const LABEL_21412 = 'component_21412';
export function Component21412({ value = 21412, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21412, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21412, 'data-value': derived.doubled }, children);
}
export default Component21412;
