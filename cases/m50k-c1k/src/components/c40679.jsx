import React from 'react';
const LABEL_40679 = 'component_40679';
export function Component40679({ value = 40679, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40679, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40679, 'data-value': derived.doubled }, children);
}
export default Component40679;
