import React from 'react';
const LABEL_40175 = 'component_40175';
export function Component40175({ value = 40175, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40175, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40175, 'data-value': derived.doubled }, children);
}
export default Component40175;
