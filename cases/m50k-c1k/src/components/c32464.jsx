import React from 'react';
const LABEL_32464 = 'component_32464';
export function Component32464({ value = 32464, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32464, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32464, 'data-value': derived.doubled }, children);
}
export default Component32464;
