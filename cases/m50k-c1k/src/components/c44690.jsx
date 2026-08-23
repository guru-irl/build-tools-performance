import React from 'react';
const LABEL_44690 = 'component_44690';
export function Component44690({ value = 44690, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44690, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44690, 'data-value': derived.doubled }, children);
}
export default Component44690;
