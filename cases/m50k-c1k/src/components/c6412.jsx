import React from 'react';
const LABEL_6412 = 'component_6412';
export function Component6412({ value = 6412, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6412, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6412, 'data-value': derived.doubled }, children);
}
export default Component6412;
