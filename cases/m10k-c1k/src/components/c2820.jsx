import React from 'react';
const LABEL_2820 = 'component_2820';
export function Component2820({ value = 2820, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2820, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2820, 'data-value': derived.doubled }, children);
}
export default Component2820;
