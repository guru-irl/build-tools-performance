import React from 'react';
const LABEL_40176 = 'component_40176';
export function Component40176({ value = 40176, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40176, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40176, 'data-value': derived.doubled }, children);
}
export default Component40176;
