import React from 'react';
const LABEL_6218 = 'component_6218';
export function Component6218({ value = 6218, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6218, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6218, 'data-value': derived.doubled }, children);
}
export default Component6218;
