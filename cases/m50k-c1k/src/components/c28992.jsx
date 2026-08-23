import React from 'react';
const LABEL_28992 = 'component_28992';
export function Component28992({ value = 28992, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28992, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28992, 'data-value': derived.doubled }, children);
}
export default Component28992;
