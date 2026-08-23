import React from 'react';
const LABEL_14272 = 'component_14272';
export function Component14272({ value = 14272, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14272, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14272, 'data-value': derived.doubled }, children);
}
export default Component14272;
