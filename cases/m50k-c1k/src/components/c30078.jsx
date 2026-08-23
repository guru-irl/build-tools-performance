import React from 'react';
const LABEL_30078 = 'component_30078';
export function Component30078({ value = 30078, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30078, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30078, 'data-value': derived.doubled }, children);
}
export default Component30078;
