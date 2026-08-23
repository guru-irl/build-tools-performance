import React from 'react';
const LABEL_29181 = 'component_29181';
export function Component29181({ value = 29181, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29181, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29181, 'data-value': derived.doubled }, children);
}
export default Component29181;
