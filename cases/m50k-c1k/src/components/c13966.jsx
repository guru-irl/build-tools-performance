import React from 'react';
const LABEL_13966 = 'component_13966';
export function Component13966({ value = 13966, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13966, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13966, 'data-value': derived.doubled }, children);
}
export default Component13966;
