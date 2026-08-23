import React from 'react';
const LABEL_29281 = 'component_29281';
export function Component29281({ value = 29281, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29281, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29281, 'data-value': derived.doubled }, children);
}
export default Component29281;
