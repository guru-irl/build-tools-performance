import React from 'react';
const LABEL_45758 = 'component_45758';
export function Component45758({ value = 45758, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45758, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45758, 'data-value': derived.doubled }, children);
}
export default Component45758;
