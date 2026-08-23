import React from 'react';
const LABEL_44365 = 'component_44365';
export function Component44365({ value = 44365, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44365, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44365, 'data-value': derived.doubled }, children);
}
export default Component44365;
