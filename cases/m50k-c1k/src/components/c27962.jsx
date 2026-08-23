import React from 'react';
const LABEL_27962 = 'component_27962';
export function Component27962({ value = 27962, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27962, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27962, 'data-value': derived.doubled }, children);
}
export default Component27962;
