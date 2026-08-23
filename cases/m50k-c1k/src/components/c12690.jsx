import React from 'react';
const LABEL_12690 = 'component_12690';
export function Component12690({ value = 12690, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12690, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12690, 'data-value': derived.doubled }, children);
}
export default Component12690;
