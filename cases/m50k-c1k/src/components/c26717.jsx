import React from 'react';
const LABEL_26717 = 'component_26717';
export function Component26717({ value = 26717, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26717, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26717, 'data-value': derived.doubled }, children);
}
export default Component26717;
