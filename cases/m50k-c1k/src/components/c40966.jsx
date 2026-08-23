import React from 'react';
const LABEL_40966 = 'component_40966';
export function Component40966({ value = 40966, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40966, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40966, 'data-value': derived.doubled }, children);
}
export default Component40966;
