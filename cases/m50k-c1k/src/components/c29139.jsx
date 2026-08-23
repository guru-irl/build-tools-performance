import React from 'react';
const LABEL_29139 = 'component_29139';
export function Component29139({ value = 29139, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29139, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29139, 'data-value': derived.doubled }, children);
}
export default Component29139;
