import React from 'react';
const LABEL_16907 = 'component_16907';
export function Component16907({ value = 16907, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16907, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16907, 'data-value': derived.doubled }, children);
}
export default Component16907;
