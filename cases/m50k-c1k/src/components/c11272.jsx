import React from 'react';
const LABEL_11272 = 'component_11272';
export function Component11272({ value = 11272, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11272, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11272, 'data-value': derived.doubled }, children);
}
export default Component11272;
