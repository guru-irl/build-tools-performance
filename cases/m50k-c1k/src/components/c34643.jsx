import React from 'react';
const LABEL_34643 = 'component_34643';
export function Component34643({ value = 34643, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34643, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34643, 'data-value': derived.doubled }, children);
}
export default Component34643;
