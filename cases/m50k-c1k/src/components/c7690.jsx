import React from 'react';
const LABEL_7690 = 'component_7690';
export function Component7690({ value = 7690, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7690, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7690, 'data-value': derived.doubled }, children);
}
export default Component7690;
