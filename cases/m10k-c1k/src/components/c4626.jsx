import React from 'react';
const LABEL_4626 = 'component_4626';
export function Component4626({ value = 4626, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4626, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4626, 'data-value': derived.doubled }, children);
}
export default Component4626;
