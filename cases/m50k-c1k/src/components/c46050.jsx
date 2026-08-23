import React from 'react';
const LABEL_46050 = 'component_46050';
export function Component46050({ value = 46050, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46050, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46050, 'data-value': derived.doubled }, children);
}
export default Component46050;
