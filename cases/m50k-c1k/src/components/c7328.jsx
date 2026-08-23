import React from 'react';
const LABEL_7328 = 'component_7328';
export function Component7328({ value = 7328, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7328, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7328, 'data-value': derived.doubled }, children);
}
export default Component7328;
