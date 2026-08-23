import React from 'react';
const LABEL_14427 = 'component_14427';
export function Component14427({ value = 14427, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14427, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14427, 'data-value': derived.doubled }, children);
}
export default Component14427;
