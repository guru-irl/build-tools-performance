import React from 'react';
const LABEL_28880 = 'component_28880';
export function Component28880({ value = 28880, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28880, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28880, 'data-value': derived.doubled }, children);
}
export default Component28880;
