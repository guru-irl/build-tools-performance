import React from 'react';
const LABEL_1045 = 'component_1045';
export function Component1045({ value = 1045, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1045, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1045, 'data-value': derived.doubled }, children);
}
export default Component1045;
