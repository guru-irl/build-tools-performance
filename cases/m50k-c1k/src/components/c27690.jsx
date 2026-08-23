import React from 'react';
const LABEL_27690 = 'component_27690';
export function Component27690({ value = 27690, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27690, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27690, 'data-value': derived.doubled }, children);
}
export default Component27690;
