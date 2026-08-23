import React from 'react';
const LABEL_11175 = 'component_11175';
export function Component11175({ value = 11175, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11175, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11175, 'data-value': derived.doubled }, children);
}
export default Component11175;
