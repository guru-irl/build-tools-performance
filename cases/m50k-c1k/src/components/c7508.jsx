import React from 'react';
const LABEL_7508 = 'component_7508';
export function Component7508({ value = 7508, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7508, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7508, 'data-value': derived.doubled }, children);
}
export default Component7508;
