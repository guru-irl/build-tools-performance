import React from 'react';
const LABEL_1186 = 'component_1186';
export function Component1186({ value = 1186, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1186, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1186, 'data-value': derived.doubled }, children);
}
export default Component1186;
