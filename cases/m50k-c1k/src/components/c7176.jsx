import React from 'react';
const LABEL_7176 = 'component_7176';
export function Component7176({ value = 7176, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7176, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7176, 'data-value': derived.doubled }, children);
}
export default Component7176;
