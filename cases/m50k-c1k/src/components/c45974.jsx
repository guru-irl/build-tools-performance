import React from 'react';
const LABEL_45974 = 'component_45974';
export function Component45974({ value = 45974, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45974, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45974, 'data-value': derived.doubled }, children);
}
export default Component45974;
