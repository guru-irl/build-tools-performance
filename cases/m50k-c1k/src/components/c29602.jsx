import React from 'react';
const LABEL_29602 = 'component_29602';
export function Component29602({ value = 29602, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29602, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29602, 'data-value': derived.doubled }, children);
}
export default Component29602;
