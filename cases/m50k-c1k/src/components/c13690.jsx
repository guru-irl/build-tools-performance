import React from 'react';
const LABEL_13690 = 'component_13690';
export function Component13690({ value = 13690, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13690, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13690, 'data-value': derived.doubled }, children);
}
export default Component13690;
