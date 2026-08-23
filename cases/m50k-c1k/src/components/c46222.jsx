import React from 'react';
const LABEL_46222 = 'component_46222';
export function Component46222({ value = 46222, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46222, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46222, 'data-value': derived.doubled }, children);
}
export default Component46222;
