import React from 'react';
const LABEL_2242 = 'component_2242';
export function Component2242({ value = 2242, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2242, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2242, 'data-value': derived.doubled }, children);
}
export default Component2242;
