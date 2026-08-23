import React from 'react';
const LABEL_46432 = 'component_46432';
export function Component46432({ value = 46432, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46432, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46432, 'data-value': derived.doubled }, children);
}
export default Component46432;
