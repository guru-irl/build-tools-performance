import React from 'react';
const LABEL_40451 = 'component_40451';
export function Component40451({ value = 40451, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40451, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40451, 'data-value': derived.doubled }, children);
}
export default Component40451;
