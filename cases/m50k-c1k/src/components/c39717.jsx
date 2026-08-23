import React from 'react';
const LABEL_39717 = 'component_39717';
export function Component39717({ value = 39717, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39717, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39717, 'data-value': derived.doubled }, children);
}
export default Component39717;
