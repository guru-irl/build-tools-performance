import React from 'react';
const LABEL_412 = 'component_412';
export function Component412({ value = 412, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_412, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_412, 'data-value': derived.doubled }, children);
}
export default Component412;
