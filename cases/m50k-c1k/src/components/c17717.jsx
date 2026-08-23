import React from 'react';
const LABEL_17717 = 'component_17717';
export function Component17717({ value = 17717, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17717, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17717, 'data-value': derived.doubled }, children);
}
export default Component17717;
