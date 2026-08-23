import React from 'react';
const LABEL_7788 = 'component_7788';
export function Component7788({ value = 7788, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7788, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7788, 'data-value': derived.doubled }, children);
}
export default Component7788;
