import React from 'react';
const LABEL_10690 = 'component_10690';
export function Component10690({ value = 10690, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10690, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10690, 'data-value': derived.doubled }, children);
}
export default Component10690;
