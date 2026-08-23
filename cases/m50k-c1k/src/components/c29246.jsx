import React from 'react';
const LABEL_29246 = 'component_29246';
export function Component29246({ value = 29246, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29246, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29246, 'data-value': derived.doubled }, children);
}
export default Component29246;
