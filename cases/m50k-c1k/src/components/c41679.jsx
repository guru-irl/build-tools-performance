import React from 'react';
const LABEL_41679 = 'component_41679';
export function Component41679({ value = 41679, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41679, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41679, 'data-value': derived.doubled }, children);
}
export default Component41679;
