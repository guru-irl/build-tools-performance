import React from 'react';
const LABEL_5690 = 'component_5690';
export function Component5690({ value = 5690, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5690, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5690, 'data-value': derived.doubled }, children);
}
export default Component5690;
