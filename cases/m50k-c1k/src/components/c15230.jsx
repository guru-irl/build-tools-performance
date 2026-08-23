import React from 'react';
const LABEL_15230 = 'component_15230';
export function Component15230({ value = 15230, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15230, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15230, 'data-value': derived.doubled }, children);
}
export default Component15230;
