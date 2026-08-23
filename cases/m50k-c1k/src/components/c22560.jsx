import React from 'react';
const LABEL_22560 = 'component_22560';
export function Component22560({ value = 22560, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22560, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22560, 'data-value': derived.doubled }, children);
}
export default Component22560;
