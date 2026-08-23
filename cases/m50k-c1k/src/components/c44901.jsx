import React from 'react';
const LABEL_44901 = 'component_44901';
export function Component44901({ value = 44901, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44901, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44901, 'data-value': derived.doubled }, children);
}
export default Component44901;
