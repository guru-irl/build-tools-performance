import React from 'react';
const LABEL_30527 = 'component_30527';
export function Component30527({ value = 30527, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30527, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30527, 'data-value': derived.doubled }, children);
}
export default Component30527;
