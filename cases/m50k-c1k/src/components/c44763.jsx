import React from 'react';
const LABEL_44763 = 'component_44763';
export function Component44763({ value = 44763, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44763, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44763, 'data-value': derived.doubled }, children);
}
export default Component44763;
