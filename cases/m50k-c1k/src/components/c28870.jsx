import React from 'react';
const LABEL_28870 = 'component_28870';
export function Component28870({ value = 28870, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28870, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28870, 'data-value': derived.doubled }, children);
}
export default Component28870;
