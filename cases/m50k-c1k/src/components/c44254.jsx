import React from 'react';
const LABEL_44254 = 'component_44254';
export function Component44254({ value = 44254, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44254, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44254, 'data-value': derived.doubled }, children);
}
export default Component44254;
