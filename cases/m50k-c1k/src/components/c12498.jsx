import React from 'react';
const LABEL_12498 = 'component_12498';
export function Component12498({ value = 12498, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12498, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12498, 'data-value': derived.doubled }, children);
}
export default Component12498;
