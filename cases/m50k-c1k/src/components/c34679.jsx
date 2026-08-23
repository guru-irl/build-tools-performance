import React from 'react';
const LABEL_34679 = 'component_34679';
export function Component34679({ value = 34679, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34679, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34679, 'data-value': derived.doubled }, children);
}
export default Component34679;
