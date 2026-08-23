import React from 'react';
const LABEL_763 = 'component_763';
export function Component763({ value = 763, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_763, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_763, 'data-value': derived.doubled }, children);
}
export default Component763;
