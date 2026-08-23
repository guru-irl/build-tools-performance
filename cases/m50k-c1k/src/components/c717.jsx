import React from 'react';
const LABEL_717 = 'component_717';
export function Component717({ value = 717, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_717, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_717, 'data-value': derived.doubled }, children);
}
export default Component717;
