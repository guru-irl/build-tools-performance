import React from 'react';
const LABEL_498 = 'component_498';
export function Component498({ value = 498, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_498, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_498, 'data-value': derived.doubled }, children);
}
export default Component498;
