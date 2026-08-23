import React from 'react';
const LABEL_16690 = 'component_16690';
export function Component16690({ value = 16690, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16690, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16690, 'data-value': derived.doubled }, children);
}
export default Component16690;
