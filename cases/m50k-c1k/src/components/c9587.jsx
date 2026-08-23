import React from 'react';
const LABEL_9587 = 'component_9587';
export function Component9587({ value = 9587, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9587, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9587, 'data-value': derived.doubled }, children);
}
export default Component9587;
