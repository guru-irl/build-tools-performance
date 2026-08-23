import React from 'react';
const LABEL_950 = 'component_950';
export function Component950({ value = 950, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_950, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_950, 'data-value': derived.doubled }, children);
}
export default Component950;
