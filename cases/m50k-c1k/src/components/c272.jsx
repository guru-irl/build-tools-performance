import React from 'react';
const LABEL_272 = 'component_272';
export function Component272({ value = 272, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_272, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_272, 'data-value': derived.doubled }, children);
}
export default Component272;
