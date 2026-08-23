import React from 'react';
const LABEL_4234 = 'component_4234';
export function Component4234({ value = 4234, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4234, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4234, 'data-value': derived.doubled }, children);
}
export default Component4234;
