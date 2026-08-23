import React from 'react';
const LABEL_46613 = 'component_46613';
export function Component46613({ value = 46613, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46613, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46613, 'data-value': derived.doubled }, children);
}
export default Component46613;
