import React from 'react';
const LABEL_45186 = 'component_45186';
export function Component45186({ value = 45186, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45186, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45186, 'data-value': derived.doubled }, children);
}
export default Component45186;
