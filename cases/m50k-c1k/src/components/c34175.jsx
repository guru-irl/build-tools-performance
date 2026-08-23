import React from 'react';
const LABEL_34175 = 'component_34175';
export function Component34175({ value = 34175, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34175, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34175, 'data-value': derived.doubled }, children);
}
export default Component34175;
