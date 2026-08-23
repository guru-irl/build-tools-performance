import React from 'react';
const LABEL_37175 = 'component_37175';
export function Component37175({ value = 37175, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37175, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37175, 'data-value': derived.doubled }, children);
}
export default Component37175;
