import React from 'react';
const LABEL_4272 = 'component_4272';
export function Component4272({ value = 4272, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4272, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4272, 'data-value': derived.doubled }, children);
}
export default Component4272;
