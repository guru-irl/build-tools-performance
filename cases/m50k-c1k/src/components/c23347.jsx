import React from 'react';
const LABEL_23347 = 'component_23347';
export function Component23347({ value = 23347, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23347, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23347, 'data-value': derived.doubled }, children);
}
export default Component23347;
