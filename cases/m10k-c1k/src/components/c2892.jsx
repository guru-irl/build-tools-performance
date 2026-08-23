import React from 'react';
const LABEL_2892 = 'component_2892';
export function Component2892({ value = 2892, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2892, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2892, 'data-value': derived.doubled }, children);
}
export default Component2892;
