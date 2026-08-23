import React from 'react';
const LABEL_10714 = 'component_10714';
export function Component10714({ value = 10714, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10714, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10714, 'data-value': derived.doubled }, children);
}
export default Component10714;
