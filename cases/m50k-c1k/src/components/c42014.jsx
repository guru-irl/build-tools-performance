import React from 'react';
const LABEL_42014 = 'component_42014';
export function Component42014({ value = 42014, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42014, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42014, 'data-value': derived.doubled }, children);
}
export default Component42014;
