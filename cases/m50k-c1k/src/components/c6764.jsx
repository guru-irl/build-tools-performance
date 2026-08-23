import React from 'react';
const LABEL_6764 = 'component_6764';
export function Component6764({ value = 6764, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6764, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6764, 'data-value': derived.doubled }, children);
}
export default Component6764;
