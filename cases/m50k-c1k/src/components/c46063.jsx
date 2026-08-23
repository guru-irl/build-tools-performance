import React from 'react';
const LABEL_46063 = 'component_46063';
export function Component46063({ value = 46063, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46063, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46063, 'data-value': derived.doubled }, children);
}
export default Component46063;
