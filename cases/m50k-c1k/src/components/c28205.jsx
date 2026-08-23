import React from 'react';
const LABEL_28205 = 'component_28205';
export function Component28205({ value = 28205, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28205, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28205, 'data-value': derived.doubled }, children);
}
export default Component28205;
