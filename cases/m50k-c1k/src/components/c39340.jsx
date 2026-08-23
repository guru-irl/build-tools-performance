import React from 'react';
const LABEL_39340 = 'component_39340';
export function Component39340({ value = 39340, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39340, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39340, 'data-value': derived.doubled }, children);
}
export default Component39340;
