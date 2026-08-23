import React from 'react';
const LABEL_2768 = 'component_2768';
export function Component2768({ value = 2768, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2768, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2768, 'data-value': derived.doubled }, children);
}
export default Component2768;
