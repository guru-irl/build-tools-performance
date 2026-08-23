import React from 'react';
const LABEL_34994 = 'component_34994';
export function Component34994({ value = 34994, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34994, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34994, 'data-value': derived.doubled }, children);
}
export default Component34994;
