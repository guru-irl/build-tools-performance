import React from 'react';
const LABEL_40478 = 'component_40478';
export function Component40478({ value = 40478, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40478, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40478, 'data-value': derived.doubled }, children);
}
export default Component40478;
