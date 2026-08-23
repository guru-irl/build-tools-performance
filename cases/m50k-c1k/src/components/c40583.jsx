import React from 'react';
const LABEL_40583 = 'component_40583';
export function Component40583({ value = 40583, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40583, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40583, 'data-value': derived.doubled }, children);
}
export default Component40583;
