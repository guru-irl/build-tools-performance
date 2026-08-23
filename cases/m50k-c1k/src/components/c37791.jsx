import React from 'react';
const LABEL_37791 = 'component_37791';
export function Component37791({ value = 37791, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37791, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37791, 'data-value': derived.doubled }, children);
}
export default Component37791;
