import React from 'react';
const LABEL_2406 = 'component_2406';
export function Component2406({ value = 2406, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2406, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2406, 'data-value': derived.doubled }, children);
}
export default Component2406;
