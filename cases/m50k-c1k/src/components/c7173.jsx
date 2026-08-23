import React from 'react';
const LABEL_7173 = 'component_7173';
export function Component7173({ value = 7173, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7173, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7173, 'data-value': derived.doubled }, children);
}
export default Component7173;
