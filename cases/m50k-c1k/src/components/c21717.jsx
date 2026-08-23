import React from 'react';
const LABEL_21717 = 'component_21717';
export function Component21717({ value = 21717, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21717, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21717, 'data-value': derived.doubled }, children);
}
export default Component21717;
