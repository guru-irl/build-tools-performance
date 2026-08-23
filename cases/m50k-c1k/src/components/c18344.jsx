import React from 'react';
const LABEL_18344 = 'component_18344';
export function Component18344({ value = 18344, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18344, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18344, 'data-value': derived.doubled }, children);
}
export default Component18344;
