import React from 'react';
const LABEL_2651 = 'component_2651';
export function Component2651({ value = 2651, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2651, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2651, 'data-value': derived.doubled }, children);
}
export default Component2651;
