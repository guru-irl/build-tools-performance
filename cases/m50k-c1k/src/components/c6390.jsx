import React from 'react';
const LABEL_6390 = 'component_6390';
export function Component6390({ value = 6390, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6390, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6390, 'data-value': derived.doubled }, children);
}
export default Component6390;
