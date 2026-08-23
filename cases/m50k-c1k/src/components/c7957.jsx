import React from 'react';
const LABEL_7957 = 'component_7957';
export function Component7957({ value = 7957, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7957, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7957, 'data-value': derived.doubled }, children);
}
export default Component7957;
