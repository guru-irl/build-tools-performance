import React from 'react';
const LABEL_15626 = 'component_15626';
export function Component15626({ value = 15626, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15626, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15626, 'data-value': derived.doubled }, children);
}
export default Component15626;
