import React from 'react';
const LABEL_48 = 'component_48';
export function Component48({ value = 48, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_48, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_48, 'data-value': derived.doubled }, children);
}
export default Component48;
