import React from 'react';
const LABEL_46246 = 'component_46246';
export function Component46246({ value = 46246, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46246, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46246, 'data-value': derived.doubled }, children);
}
export default Component46246;
