import React from 'react';
const LABEL_45804 = 'component_45804';
export function Component45804({ value = 45804, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45804, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45804, 'data-value': derived.doubled }, children);
}
export default Component45804;
