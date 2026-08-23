import React from 'react';
const LABEL_36318 = 'component_36318';
export function Component36318({ value = 36318, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36318, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36318, 'data-value': derived.doubled }, children);
}
export default Component36318;
