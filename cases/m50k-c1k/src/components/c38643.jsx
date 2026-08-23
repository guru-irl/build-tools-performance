import React from 'react';
const LABEL_38643 = 'component_38643';
export function Component38643({ value = 38643, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38643, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38643, 'data-value': derived.doubled }, children);
}
export default Component38643;
