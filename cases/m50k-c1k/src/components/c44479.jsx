import React from 'react';
const LABEL_44479 = 'component_44479';
export function Component44479({ value = 44479, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44479, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44479, 'data-value': derived.doubled }, children);
}
export default Component44479;
