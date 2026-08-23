import React from 'react';
const LABEL_45169 = 'component_45169';
export function Component45169({ value = 45169, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45169, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45169, 'data-value': derived.doubled }, children);
}
export default Component45169;
