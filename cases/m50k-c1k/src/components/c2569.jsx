import React from 'react';
const LABEL_2569 = 'component_2569';
export function Component2569({ value = 2569, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2569, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2569, 'data-value': derived.doubled }, children);
}
export default Component2569;
