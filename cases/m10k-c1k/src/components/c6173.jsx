import React from 'react';
const LABEL_6173 = 'component_6173';
export function Component6173({ value = 6173, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6173, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6173, 'data-value': derived.doubled }, children);
}
export default Component6173;
