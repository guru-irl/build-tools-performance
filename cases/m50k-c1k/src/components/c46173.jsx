import React from 'react';
const LABEL_46173 = 'component_46173';
export function Component46173({ value = 46173, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46173, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46173, 'data-value': derived.doubled }, children);
}
export default Component46173;
