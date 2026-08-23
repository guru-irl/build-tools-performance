import React from 'react';
const LABEL_4070 = 'component_4070';
export function Component4070({ value = 4070, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4070, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4070, 'data-value': derived.doubled }, children);
}
export default Component4070;
