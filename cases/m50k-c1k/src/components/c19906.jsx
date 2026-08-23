import React from 'react';
const LABEL_19906 = 'component_19906';
export function Component19906({ value = 19906, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19906, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19906, 'data-value': derived.doubled }, children);
}
export default Component19906;
