import React from 'react';
const LABEL_16857 = 'component_16857';
export function Component16857({ value = 16857, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16857, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16857, 'data-value': derived.doubled }, children);
}
export default Component16857;
