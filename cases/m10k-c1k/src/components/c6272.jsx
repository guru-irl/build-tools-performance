import React from 'react';
const LABEL_6272 = 'component_6272';
export function Component6272({ value = 6272, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6272, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6272, 'data-value': derived.doubled }, children);
}
export default Component6272;
