import React from 'react';
const LABEL_45643 = 'component_45643';
export function Component45643({ value = 45643, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45643, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45643, 'data-value': derived.doubled }, children);
}
export default Component45643;
