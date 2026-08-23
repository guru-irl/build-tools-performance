import React from 'react';
const LABEL_4799 = 'component_4799';
export function Component4799({ value = 4799, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4799, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4799, 'data-value': derived.doubled }, children);
}
export default Component4799;
