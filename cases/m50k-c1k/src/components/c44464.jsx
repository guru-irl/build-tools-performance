import React from 'react';
const LABEL_44464 = 'component_44464';
export function Component44464({ value = 44464, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44464, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44464, 'data-value': derived.doubled }, children);
}
export default Component44464;
