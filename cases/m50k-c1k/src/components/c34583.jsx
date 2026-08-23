import React from 'react';
const LABEL_34583 = 'component_34583';
export function Component34583({ value = 34583, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34583, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34583, 'data-value': derived.doubled }, children);
}
export default Component34583;
