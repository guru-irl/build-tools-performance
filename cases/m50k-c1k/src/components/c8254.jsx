import React from 'react';
const LABEL_8254 = 'component_8254';
export function Component8254({ value = 8254, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8254, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8254, 'data-value': derived.doubled }, children);
}
export default Component8254;
