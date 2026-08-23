import React from 'react';
const LABEL_45912 = 'component_45912';
export function Component45912({ value = 45912, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45912, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45912, 'data-value': derived.doubled }, children);
}
export default Component45912;
