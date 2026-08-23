import React from 'react';
const LABEL_4199 = 'component_4199';
export function Component4199({ value = 4199, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4199, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4199, 'data-value': derived.doubled }, children);
}
export default Component4199;
