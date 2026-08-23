import React from 'react';
const LABEL_22272 = 'component_22272';
export function Component22272({ value = 22272, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22272, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22272, 'data-value': derived.doubled }, children);
}
export default Component22272;
