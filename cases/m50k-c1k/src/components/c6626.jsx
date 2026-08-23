import React from 'react';
const LABEL_6626 = 'component_6626';
export function Component6626({ value = 6626, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6626, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6626, 'data-value': derived.doubled }, children);
}
export default Component6626;
