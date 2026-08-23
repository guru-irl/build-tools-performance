import React from 'react';
const LABEL_4171 = 'component_4171';
export function Component4171({ value = 4171, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4171, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4171, 'data-value': derived.doubled }, children);
}
export default Component4171;
