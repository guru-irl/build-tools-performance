import React from 'react';
const LABEL_40373 = 'component_40373';
export function Component40373({ value = 40373, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40373, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40373, 'data-value': derived.doubled }, children);
}
export default Component40373;
