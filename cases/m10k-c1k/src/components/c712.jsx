import React from 'react';
const LABEL_712 = 'component_712';
export function Component712({ value = 712, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_712, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_712, 'data-value': derived.doubled }, children);
}
export default Component712;
