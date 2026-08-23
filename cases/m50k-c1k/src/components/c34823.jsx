import React from 'react';
const LABEL_34823 = 'component_34823';
export function Component34823({ value = 34823, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34823, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34823, 'data-value': derived.doubled }, children);
}
export default Component34823;
