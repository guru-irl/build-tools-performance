import React from 'react';
const LABEL_28527 = 'component_28527';
export function Component28527({ value = 28527, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28527, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28527, 'data-value': derived.doubled }, children);
}
export default Component28527;
