import React from 'react';
const LABEL_17464 = 'component_17464';
export function Component17464({ value = 17464, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17464, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17464, 'data-value': derived.doubled }, children);
}
export default Component17464;
