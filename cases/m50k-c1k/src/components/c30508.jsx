import React from 'react';
const LABEL_30508 = 'component_30508';
export function Component30508({ value = 30508, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30508, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30508, 'data-value': derived.doubled }, children);
}
export default Component30508;
