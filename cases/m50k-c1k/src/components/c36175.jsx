import React from 'react';
const LABEL_36175 = 'component_36175';
export function Component36175({ value = 36175, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36175, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36175, 'data-value': derived.doubled }, children);
}
export default Component36175;
