import React from 'react';
const LABEL_2690 = 'component_2690';
export function Component2690({ value = 2690, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2690, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2690, 'data-value': derived.doubled }, children);
}
export default Component2690;
