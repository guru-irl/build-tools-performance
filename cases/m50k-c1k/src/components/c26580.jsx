import React from 'react';
const LABEL_26580 = 'component_26580';
export function Component26580({ value = 26580, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26580, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26580, 'data-value': derived.doubled }, children);
}
export default Component26580;
