import React from 'react';
const LABEL_27403 = 'component_27403';
export function Component27403({ value = 27403, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27403, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27403, 'data-value': derived.doubled }, children);
}
export default Component27403;
