import React from 'react';
const LABEL_34907 = 'component_34907';
export function Component34907({ value = 34907, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34907, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34907, 'data-value': derived.doubled }, children);
}
export default Component34907;
