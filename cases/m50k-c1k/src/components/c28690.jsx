import React from 'react';
const LABEL_28690 = 'component_28690';
export function Component28690({ value = 28690, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28690, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28690, 'data-value': derived.doubled }, children);
}
export default Component28690;
