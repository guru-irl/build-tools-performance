import React from 'react';
const LABEL_19222 = 'component_19222';
export function Component19222({ value = 19222, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19222, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19222, 'data-value': derived.doubled }, children);
}
export default Component19222;
