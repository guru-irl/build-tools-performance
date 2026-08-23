import React from 'react';
const LABEL_30498 = 'component_30498';
export function Component30498({ value = 30498, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30498, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30498, 'data-value': derived.doubled }, children);
}
export default Component30498;
