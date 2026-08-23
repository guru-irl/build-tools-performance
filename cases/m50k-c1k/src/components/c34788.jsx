import React from 'react';
const LABEL_34788 = 'component_34788';
export function Component34788({ value = 34788, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34788, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34788, 'data-value': derived.doubled }, children);
}
export default Component34788;
