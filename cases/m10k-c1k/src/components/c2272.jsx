import React from 'react';
const LABEL_2272 = 'component_2272';
export function Component2272({ value = 2272, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2272, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2272, 'data-value': derived.doubled }, children);
}
export default Component2272;
