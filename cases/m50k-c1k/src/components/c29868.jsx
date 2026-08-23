import React from 'react';
const LABEL_29868 = 'component_29868';
export function Component29868({ value = 29868, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29868, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29868, 'data-value': derived.doubled }, children);
}
export default Component29868;
