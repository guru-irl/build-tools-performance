import React from 'react';
const LABEL_37907 = 'component_37907';
export function Component37907({ value = 37907, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37907, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37907, 'data-value': derived.doubled }, children);
}
export default Component37907;
