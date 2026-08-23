import React from 'react';
const LABEL_19464 = 'component_19464';
export function Component19464({ value = 19464, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19464, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19464, 'data-value': derived.doubled }, children);
}
export default Component19464;
