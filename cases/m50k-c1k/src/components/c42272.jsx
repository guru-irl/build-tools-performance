import React from 'react';
const LABEL_42272 = 'component_42272';
export function Component42272({ value = 42272, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42272, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42272, 'data-value': derived.doubled }, children);
}
export default Component42272;
