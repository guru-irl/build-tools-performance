import React from 'react';
const LABEL_37690 = 'component_37690';
export function Component37690({ value = 37690, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37690, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37690, 'data-value': derived.doubled }, children);
}
export default Component37690;
