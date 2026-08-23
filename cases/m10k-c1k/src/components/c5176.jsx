import React from 'react';
const LABEL_5176 = 'component_5176';
export function Component5176({ value = 5176, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5176, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5176, 'data-value': derived.doubled }, children);
}
export default Component5176;
