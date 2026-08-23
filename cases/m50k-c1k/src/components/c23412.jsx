import React from 'react';
const LABEL_23412 = 'component_23412';
export function Component23412({ value = 23412, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23412, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23412, 'data-value': derived.doubled }, children);
}
export default Component23412;
