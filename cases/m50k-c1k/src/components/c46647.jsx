import React from 'react';
const LABEL_46647 = 'component_46647';
export function Component46647({ value = 46647, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46647, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46647, 'data-value': derived.doubled }, children);
}
export default Component46647;
