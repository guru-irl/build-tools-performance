import React from 'react';
const LABEL_14943 = 'component_14943';
export function Component14943({ value = 14943, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14943, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14943, 'data-value': derived.doubled }, children);
}
export default Component14943;
