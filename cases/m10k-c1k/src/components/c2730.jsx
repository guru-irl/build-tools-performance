import React from 'react';
const LABEL_2730 = 'component_2730';
export function Component2730({ value = 2730, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2730, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2730, 'data-value': derived.doubled }, children);
}
export default Component2730;
