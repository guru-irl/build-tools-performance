import React from 'react';
const LABEL_28464 = 'component_28464';
export function Component28464({ value = 28464, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28464, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28464, 'data-value': derived.doubled }, children);
}
export default Component28464;
