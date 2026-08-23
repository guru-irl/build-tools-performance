import React from 'react';
const LABEL_40962 = 'component_40962';
export function Component40962({ value = 40962, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40962, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40962, 'data-value': derived.doubled }, children);
}
export default Component40962;
