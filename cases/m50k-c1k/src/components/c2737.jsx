import React from 'react';
const LABEL_2737 = 'component_2737';
export function Component2737({ value = 2737, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2737, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2737, 'data-value': derived.doubled }, children);
}
export default Component2737;
