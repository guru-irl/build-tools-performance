import React from 'react';
const LABEL_6498 = 'component_6498';
export function Component6498({ value = 6498, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6498, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6498, 'data-value': derived.doubled }, children);
}
export default Component6498;
