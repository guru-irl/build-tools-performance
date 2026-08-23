import React from 'react';
const LABEL_15303 = 'component_15303';
export function Component15303({ value = 15303, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15303, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15303, 'data-value': derived.doubled }, children);
}
export default Component15303;
