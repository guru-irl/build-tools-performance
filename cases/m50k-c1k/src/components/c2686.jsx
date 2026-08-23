import React from 'react';
const LABEL_2686 = 'component_2686';
export function Component2686({ value = 2686, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2686, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2686, 'data-value': derived.doubled }, children);
}
export default Component2686;
