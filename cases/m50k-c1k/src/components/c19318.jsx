import React from 'react';
const LABEL_19318 = 'component_19318';
export function Component19318({ value = 19318, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19318, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19318, 'data-value': derived.doubled }, children);
}
export default Component19318;
