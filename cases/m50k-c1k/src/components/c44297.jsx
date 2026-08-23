import React from 'react';
const LABEL_44297 = 'component_44297';
export function Component44297({ value = 44297, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44297, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44297, 'data-value': derived.doubled }, children);
}
export default Component44297;
