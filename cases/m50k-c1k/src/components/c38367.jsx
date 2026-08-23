import React from 'react';
const LABEL_38367 = 'component_38367';
export function Component38367({ value = 38367, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38367, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38367, 'data-value': derived.doubled }, children);
}
export default Component38367;
