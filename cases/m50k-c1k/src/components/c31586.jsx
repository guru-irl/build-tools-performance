import React from 'react';
const LABEL_31586 = 'component_31586';
export function Component31586({ value = 31586, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31586, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31586, 'data-value': derived.doubled }, children);
}
export default Component31586;
