import React from 'react';
const LABEL_5272 = 'component_5272';
export function Component5272({ value = 5272, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5272, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5272, 'data-value': derived.doubled }, children);
}
export default Component5272;
