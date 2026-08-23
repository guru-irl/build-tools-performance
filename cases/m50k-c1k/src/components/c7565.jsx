import React from 'react';
const LABEL_7565 = 'component_7565';
export function Component7565({ value = 7565, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7565, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7565, 'data-value': derived.doubled }, children);
}
export default Component7565;
