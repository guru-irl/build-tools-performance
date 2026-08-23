import React from 'react';
const LABEL_18629 = 'component_18629';
export function Component18629({ value = 18629, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18629, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18629, 'data-value': derived.doubled }, children);
}
export default Component18629;
