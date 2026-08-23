import React from 'react';
const LABEL_45176 = 'component_45176';
export function Component45176({ value = 45176, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45176, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45176, 'data-value': derived.doubled }, children);
}
export default Component45176;
