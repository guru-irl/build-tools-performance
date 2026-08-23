import React from 'react';
const LABEL_45278 = 'component_45278';
export function Component45278({ value = 45278, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45278, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45278, 'data-value': derived.doubled }, children);
}
export default Component45278;
