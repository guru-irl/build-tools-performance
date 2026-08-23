import React from 'react';
const LABEL_23803 = 'component_23803';
export function Component23803({ value = 23803, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23803, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23803, 'data-value': derived.doubled }, children);
}
export default Component23803;
