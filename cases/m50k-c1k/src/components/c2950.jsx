import React from 'react';
const LABEL_2950 = 'component_2950';
export function Component2950({ value = 2950, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2950, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2950, 'data-value': derived.doubled }, children);
}
export default Component2950;
