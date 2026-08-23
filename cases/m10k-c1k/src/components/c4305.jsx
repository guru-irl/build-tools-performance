import React from 'react';
const LABEL_4305 = 'component_4305';
export function Component4305({ value = 4305, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4305, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4305, 'data-value': derived.doubled }, children);
}
export default Component4305;
