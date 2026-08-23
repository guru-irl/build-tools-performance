import React from 'react';
const LABEL_46351 = 'component_46351';
export function Component46351({ value = 46351, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46351, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46351, 'data-value': derived.doubled }, children);
}
export default Component46351;
