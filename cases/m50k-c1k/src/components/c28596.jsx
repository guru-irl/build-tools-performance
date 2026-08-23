import React from 'react';
const LABEL_28596 = 'component_28596';
export function Component28596({ value = 28596, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28596, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28596, 'data-value': derived.doubled }, children);
}
export default Component28596;
