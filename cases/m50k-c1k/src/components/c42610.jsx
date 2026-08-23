import React from 'react';
const LABEL_42610 = 'component_42610';
export function Component42610({ value = 42610, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42610, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42610, 'data-value': derived.doubled }, children);
}
export default Component42610;
