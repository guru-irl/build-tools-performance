import React from 'react';
const LABEL_6717 = 'component_6717';
export function Component6717({ value = 6717, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6717, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6717, 'data-value': derived.doubled }, children);
}
export default Component6717;
