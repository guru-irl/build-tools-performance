import React from 'react';
const LABEL_7966 = 'component_7966';
export function Component7966({ value = 7966, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7966, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7966, 'data-value': derived.doubled }, children);
}
export default Component7966;
