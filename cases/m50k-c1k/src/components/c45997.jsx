import React from 'react';
const LABEL_45997 = 'component_45997';
export function Component45997({ value = 45997, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45997, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45997, 'data-value': derived.doubled }, children);
}
export default Component45997;
