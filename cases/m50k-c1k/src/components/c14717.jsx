import React from 'react';
const LABEL_14717 = 'component_14717';
export function Component14717({ value = 14717, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14717, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14717, 'data-value': derived.doubled }, children);
}
export default Component14717;
