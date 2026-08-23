import React from 'react';
const LABEL_7913 = 'component_7913';
export function Component7913({ value = 7913, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7913, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7913, 'data-value': derived.doubled }, children);
}
export default Component7913;
