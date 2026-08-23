import React from 'react';
const LABEL_40272 = 'component_40272';
export function Component40272({ value = 40272, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40272, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40272, 'data-value': derived.doubled }, children);
}
export default Component40272;
