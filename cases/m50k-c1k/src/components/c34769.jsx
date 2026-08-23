import React from 'react';
const LABEL_34769 = 'component_34769';
export function Component34769({ value = 34769, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34769, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34769, 'data-value': derived.doubled }, children);
}
export default Component34769;
