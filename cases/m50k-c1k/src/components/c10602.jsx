import React from 'react';
const LABEL_10602 = 'component_10602';
export function Component10602({ value = 10602, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10602, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10602, 'data-value': derived.doubled }, children);
}
export default Component10602;
