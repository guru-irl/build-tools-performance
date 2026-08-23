import React from 'react';
const LABEL_29130 = 'component_29130';
export function Component29130({ value = 29130, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29130, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29130, 'data-value': derived.doubled }, children);
}
export default Component29130;
