import React from 'react';
const LABEL_28272 = 'component_28272';
export function Component28272({ value = 28272, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28272, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28272, 'data-value': derived.doubled }, children);
}
export default Component28272;
