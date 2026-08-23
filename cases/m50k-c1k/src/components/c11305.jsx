import React from 'react';
const LABEL_11305 = 'component_11305';
export function Component11305({ value = 11305, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11305, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11305, 'data-value': derived.doubled }, children);
}
export default Component11305;
