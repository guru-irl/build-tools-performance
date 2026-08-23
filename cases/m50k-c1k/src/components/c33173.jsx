import React from 'react';
const LABEL_33173 = 'component_33173';
export function Component33173({ value = 33173, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33173, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33173, 'data-value': derived.doubled }, children);
}
export default Component33173;
