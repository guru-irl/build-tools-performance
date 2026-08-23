import React from 'react';
const LABEL_30857 = 'component_30857';
export function Component30857({ value = 30857, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30857, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30857, 'data-value': derived.doubled }, children);
}
export default Component30857;
