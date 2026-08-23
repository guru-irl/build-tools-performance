import React from 'react';
const LABEL_2057 = 'component_2057';
export function Component2057({ value = 2057, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2057, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2057, 'data-value': derived.doubled }, children);
}
export default Component2057;
