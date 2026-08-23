import React from 'react';
const LABEL_34566 = 'component_34566';
export function Component34566({ value = 34566, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34566, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34566, 'data-value': derived.doubled }, children);
}
export default Component34566;
