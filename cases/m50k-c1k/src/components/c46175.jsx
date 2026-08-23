import React from 'react';
const LABEL_46175 = 'component_46175';
export function Component46175({ value = 46175, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46175, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46175, 'data-value': derived.doubled }, children);
}
export default Component46175;
