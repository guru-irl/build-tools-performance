import React from 'react';
const LABEL_4423 = 'component_4423';
export function Component4423({ value = 4423, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4423, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4423, 'data-value': derived.doubled }, children);
}
export default Component4423;
