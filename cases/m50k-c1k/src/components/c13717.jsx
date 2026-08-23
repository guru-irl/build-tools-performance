import React from 'react';
const LABEL_13717 = 'component_13717';
export function Component13717({ value = 13717, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13717, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13717, 'data-value': derived.doubled }, children);
}
export default Component13717;
