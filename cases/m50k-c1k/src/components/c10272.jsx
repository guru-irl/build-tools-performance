import React from 'react';
const LABEL_10272 = 'component_10272';
export function Component10272({ value = 10272, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10272, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10272, 'data-value': derived.doubled }, children);
}
export default Component10272;
