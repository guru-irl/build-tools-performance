import React from 'react';
const LABEL_45845 = 'component_45845';
export function Component45845({ value = 45845, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45845, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45845, 'data-value': derived.doubled }, children);
}
export default Component45845;
