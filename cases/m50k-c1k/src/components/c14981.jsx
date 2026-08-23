import React from 'react';
const LABEL_14981 = 'component_14981';
export function Component14981({ value = 14981, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14981, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14981, 'data-value': derived.doubled }, children);
}
export default Component14981;
