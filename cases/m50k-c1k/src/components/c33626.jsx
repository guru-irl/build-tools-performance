import React from 'react';
const LABEL_33626 = 'component_33626';
export function Component33626({ value = 33626, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33626, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33626, 'data-value': derived.doubled }, children);
}
export default Component33626;
