import React from 'react';
const LABEL_46377 = 'component_46377';
export function Component46377({ value = 46377, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46377, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46377, 'data-value': derived.doubled }, children);
}
export default Component46377;
