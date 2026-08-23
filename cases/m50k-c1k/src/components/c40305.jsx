import React from 'react';
const LABEL_40305 = 'component_40305';
export function Component40305({ value = 40305, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40305, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40305, 'data-value': derived.doubled }, children);
}
export default Component40305;
