import React from 'react';
const LABEL_6907 = 'component_6907';
export function Component6907({ value = 6907, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6907, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6907, 'data-value': derived.doubled }, children);
}
export default Component6907;
