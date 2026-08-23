import React from 'react';
const LABEL_4464 = 'component_4464';
export function Component4464({ value = 4464, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4464, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4464, 'data-value': derived.doubled }, children);
}
export default Component4464;
