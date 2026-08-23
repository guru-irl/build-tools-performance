import React from 'react';
const LABEL_45325 = 'component_45325';
export function Component45325({ value = 45325, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45325, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45325, 'data-value': derived.doubled }, children);
}
export default Component45325;
