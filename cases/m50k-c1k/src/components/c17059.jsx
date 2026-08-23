import React from 'react';
const LABEL_17059 = 'component_17059';
export function Component17059({ value = 17059, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17059, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17059, 'data-value': derived.doubled }, children);
}
export default Component17059;
