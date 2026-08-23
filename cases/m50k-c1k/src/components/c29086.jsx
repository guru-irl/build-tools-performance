import React from 'react';
const LABEL_29086 = 'component_29086';
export function Component29086({ value = 29086, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29086, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29086, 'data-value': derived.doubled }, children);
}
export default Component29086;
