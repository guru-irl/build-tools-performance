import React from 'react';
const LABEL_34420 = 'component_34420';
export function Component34420({ value = 34420, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34420, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34420, 'data-value': derived.doubled }, children);
}
export default Component34420;
