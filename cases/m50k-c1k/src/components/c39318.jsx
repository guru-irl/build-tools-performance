import React from 'react';
const LABEL_39318 = 'component_39318';
export function Component39318({ value = 39318, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39318, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39318, 'data-value': derived.doubled }, children);
}
export default Component39318;
