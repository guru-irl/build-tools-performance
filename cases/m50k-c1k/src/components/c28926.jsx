import React from 'react';
const LABEL_28926 = 'component_28926';
export function Component28926({ value = 28926, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28926, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28926, 'data-value': derived.doubled }, children);
}
export default Component28926;
