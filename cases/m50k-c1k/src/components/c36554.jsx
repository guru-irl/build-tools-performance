import React from 'react';
const LABEL_36554 = 'component_36554';
export function Component36554({ value = 36554, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36554, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36554, 'data-value': derived.doubled }, children);
}
export default Component36554;
