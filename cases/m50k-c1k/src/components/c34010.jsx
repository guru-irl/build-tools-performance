import React from 'react';
const LABEL_34010 = 'component_34010';
export function Component34010({ value = 34010, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34010, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34010, 'data-value': derived.doubled }, children);
}
export default Component34010;
