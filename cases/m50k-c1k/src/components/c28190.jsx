import React from 'react';
const LABEL_28190 = 'component_28190';
export function Component28190({ value = 28190, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28190, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28190, 'data-value': derived.doubled }, children);
}
export default Component28190;
