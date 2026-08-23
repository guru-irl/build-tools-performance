import React from 'react';
const LABEL_30592 = 'component_30592';
export function Component30592({ value = 30592, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30592, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30592, 'data-value': derived.doubled }, children);
}
export default Component30592;
