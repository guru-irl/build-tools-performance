import React from 'react';
const LABEL_16183 = 'component_16183';
export function Component16183({ value = 16183, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16183, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16183, 'data-value': derived.doubled }, children);
}
export default Component16183;
