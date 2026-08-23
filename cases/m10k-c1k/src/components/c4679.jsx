import React from 'react';
const LABEL_4679 = 'component_4679';
export function Component4679({ value = 4679, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4679, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4679, 'data-value': derived.doubled }, children);
}
export default Component4679;
