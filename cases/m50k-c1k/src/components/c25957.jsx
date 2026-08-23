import React from 'react';
const LABEL_25957 = 'component_25957';
export function Component25957({ value = 25957, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25957, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25957, 'data-value': derived.doubled }, children);
}
export default Component25957;
