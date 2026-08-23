import React from 'react';
const LABEL_45870 = 'component_45870';
export function Component45870({ value = 45870, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45870, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45870, 'data-value': derived.doubled }, children);
}
export default Component45870;
