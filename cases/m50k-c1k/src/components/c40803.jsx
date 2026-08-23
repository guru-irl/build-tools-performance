import React from 'react';
const LABEL_40803 = 'component_40803';
export function Component40803({ value = 40803, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40803, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40803, 'data-value': derived.doubled }, children);
}
export default Component40803;
