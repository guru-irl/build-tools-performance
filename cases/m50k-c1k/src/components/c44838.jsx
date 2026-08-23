import React from 'react';
const LABEL_44838 = 'component_44838';
export function Component44838({ value = 44838, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44838, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44838, 'data-value': derived.doubled }, children);
}
export default Component44838;
