import React from 'react';
const LABEL_39110 = 'component_39110';
export function Component39110({ value = 39110, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39110, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39110, 'data-value': derived.doubled }, children);
}
export default Component39110;
