import React from 'react';
const LABEL_36613 = 'component_36613';
export function Component36613({ value = 36613, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36613, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36613, 'data-value': derived.doubled }, children);
}
export default Component36613;
