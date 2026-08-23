import React from 'react';
const LABEL_7577 = 'component_7577';
export function Component7577({ value = 7577, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7577, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7577, 'data-value': derived.doubled }, children);
}
export default Component7577;
