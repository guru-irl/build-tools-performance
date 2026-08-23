import React from 'react';
const LABEL_7655 = 'component_7655';
export function Component7655({ value = 7655, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7655, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7655, 'data-value': derived.doubled }, children);
}
export default Component7655;
