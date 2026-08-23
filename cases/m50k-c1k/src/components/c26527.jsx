import React from 'react';
const LABEL_26527 = 'component_26527';
export function Component26527({ value = 26527, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26527, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26527, 'data-value': derived.doubled }, children);
}
export default Component26527;
