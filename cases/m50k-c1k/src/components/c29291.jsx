import React from 'react';
const LABEL_29291 = 'component_29291';
export function Component29291({ value = 29291, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29291, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29291, 'data-value': derived.doubled }, children);
}
export default Component29291;
