import React from 'react';
const LABEL_29502 = 'component_29502';
export function Component29502({ value = 29502, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29502, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29502, 'data-value': derived.doubled }, children);
}
export default Component29502;
