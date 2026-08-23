import React from 'react';
const LABEL_39966 = 'component_39966';
export function Component39966({ value = 39966, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39966, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39966, 'data-value': derived.doubled }, children);
}
export default Component39966;
