import React from 'react';
const LABEL_7926 = 'component_7926';
export function Component7926({ value = 7926, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7926, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7926, 'data-value': derived.doubled }, children);
}
export default Component7926;
