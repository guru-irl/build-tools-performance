import React from 'react';
const LABEL_28440 = 'component_28440';
export function Component28440({ value = 28440, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28440, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28440, 'data-value': derived.doubled }, children);
}
export default Component28440;
