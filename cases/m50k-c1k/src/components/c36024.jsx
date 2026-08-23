import React from 'react';
const LABEL_36024 = 'component_36024';
export function Component36024({ value = 36024, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36024, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36024, 'data-value': derived.doubled }, children);
}
export default Component36024;
