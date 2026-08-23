import React from 'react';
const LABEL_1690 = 'component_1690';
export function Component1690({ value = 1690, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1690, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1690, 'data-value': derived.doubled }, children);
}
export default Component1690;
