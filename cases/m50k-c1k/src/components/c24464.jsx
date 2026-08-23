import React from 'react';
const LABEL_24464 = 'component_24464';
export function Component24464({ value = 24464, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24464, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24464, 'data-value': derived.doubled }, children);
}
export default Component24464;
