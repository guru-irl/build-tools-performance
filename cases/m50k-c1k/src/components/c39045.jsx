import React from 'react';
const LABEL_39045 = 'component_39045';
export function Component39045({ value = 39045, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39045, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39045, 'data-value': derived.doubled }, children);
}
export default Component39045;
