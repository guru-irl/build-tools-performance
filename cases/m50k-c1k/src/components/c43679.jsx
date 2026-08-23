import React from 'react';
const LABEL_43679 = 'component_43679';
export function Component43679({ value = 43679, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43679, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43679, 'data-value': derived.doubled }, children);
}
export default Component43679;
