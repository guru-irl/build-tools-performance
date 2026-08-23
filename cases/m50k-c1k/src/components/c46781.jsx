import React from 'react';
const LABEL_46781 = 'component_46781';
export function Component46781({ value = 46781, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46781, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46781, 'data-value': derived.doubled }, children);
}
export default Component46781;
