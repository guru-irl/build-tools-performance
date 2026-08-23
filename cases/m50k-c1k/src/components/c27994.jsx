import React from 'react';
const LABEL_27994 = 'component_27994';
export function Component27994({ value = 27994, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27994, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27994, 'data-value': derived.doubled }, children);
}
export default Component27994;
