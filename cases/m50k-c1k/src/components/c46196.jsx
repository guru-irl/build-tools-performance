import React from 'react';
const LABEL_46196 = 'component_46196';
export function Component46196({ value = 46196, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46196, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46196, 'data-value': derived.doubled }, children);
}
export default Component46196;
