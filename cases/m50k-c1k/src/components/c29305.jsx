import React from 'react';
const LABEL_29305 = 'component_29305';
export function Component29305({ value = 29305, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29305, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29305, 'data-value': derived.doubled }, children);
}
export default Component29305;
