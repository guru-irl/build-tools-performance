import React from 'react';
const LABEL_45384 = 'component_45384';
export function Component45384({ value = 45384, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45384, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45384, 'data-value': derived.doubled }, children);
}
export default Component45384;
