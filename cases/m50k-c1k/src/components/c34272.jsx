import React from 'react';
const LABEL_34272 = 'component_34272';
export function Component34272({ value = 34272, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34272, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34272, 'data-value': derived.doubled }, children);
}
export default Component34272;
