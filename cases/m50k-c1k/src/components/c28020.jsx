import React from 'react';
const LABEL_28020 = 'component_28020';
export function Component28020({ value = 28020, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28020, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28020, 'data-value': derived.doubled }, children);
}
export default Component28020;
