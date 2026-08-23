import React from 'react';
const LABEL_30745 = 'component_30745';
export function Component30745({ value = 30745, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30745, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30745, 'data-value': derived.doubled }, children);
}
export default Component30745;
