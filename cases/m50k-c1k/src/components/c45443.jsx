import React from 'react';
const LABEL_45443 = 'component_45443';
export function Component45443({ value = 45443, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45443, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45443, 'data-value': derived.doubled }, children);
}
export default Component45443;
