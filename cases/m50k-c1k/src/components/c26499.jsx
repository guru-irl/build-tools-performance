import React from 'react';
const LABEL_26499 = 'component_26499';
export function Component26499({ value = 26499, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26499, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26499, 'data-value': derived.doubled }, children);
}
export default Component26499;
