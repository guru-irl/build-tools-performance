import React from 'react';
const LABEL_175 = 'component_175';
export function Component175({ value = 175, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_175, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_175, 'data-value': derived.doubled }, children);
}
export default Component175;
