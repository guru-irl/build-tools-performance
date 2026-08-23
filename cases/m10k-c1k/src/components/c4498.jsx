import React from 'react';
const LABEL_4498 = 'component_4498';
export function Component4498({ value = 4498, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4498, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4498, 'data-value': derived.doubled }, children);
}
export default Component4498;
