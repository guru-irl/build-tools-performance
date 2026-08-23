import React from 'react';
const LABEL_18560 = 'component_18560';
export function Component18560({ value = 18560, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18560, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18560, 'data-value': derived.doubled }, children);
}
export default Component18560;
