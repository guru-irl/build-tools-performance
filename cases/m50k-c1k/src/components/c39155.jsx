import React from 'react';
const LABEL_39155 = 'component_39155';
export function Component39155({ value = 39155, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39155, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39155, 'data-value': derived.doubled }, children);
}
export default Component39155;
