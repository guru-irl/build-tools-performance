import React from 'react';
const LABEL_41614 = 'component_41614';
export function Component41614({ value = 41614, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41614, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41614, 'data-value': derived.doubled }, children);
}
export default Component41614;
