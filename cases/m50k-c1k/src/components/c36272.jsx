import React from 'react';
const LABEL_36272 = 'component_36272';
export function Component36272({ value = 36272, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36272, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36272, 'data-value': derived.doubled }, children);
}
export default Component36272;
