import React from 'react';
const LABEL_3106 = 'component_3106';
export function Component3106({ value = 3106, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3106, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3106, 'data-value': derived.doubled }, children);
}
export default Component3106;
