import React from 'react';
const LABEL_29486 = 'component_29486';
export function Component29486({ value = 29486, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29486, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29486, 'data-value': derived.doubled }, children);
}
export default Component29486;
