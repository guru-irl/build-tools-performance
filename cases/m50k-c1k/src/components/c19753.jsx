import React from 'react';
const LABEL_19753 = 'component_19753';
export function Component19753({ value = 19753, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19753, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19753, 'data-value': derived.doubled }, children);
}
export default Component19753;
