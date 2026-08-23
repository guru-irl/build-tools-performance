import React from 'react';
const LABEL_38498 = 'component_38498';
export function Component38498({ value = 38498, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38498, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38498, 'data-value': derived.doubled }, children);
}
export default Component38498;
