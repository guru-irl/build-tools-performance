import React from 'react';
const LABEL_22690 = 'component_22690';
export function Component22690({ value = 22690, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22690, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22690, 'data-value': derived.doubled }, children);
}
export default Component22690;
