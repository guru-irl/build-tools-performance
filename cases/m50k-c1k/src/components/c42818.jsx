import React from 'react';
const LABEL_42818 = 'component_42818';
export function Component42818({ value = 42818, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42818, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42818, 'data-value': derived.doubled }, children);
}
export default Component42818;
