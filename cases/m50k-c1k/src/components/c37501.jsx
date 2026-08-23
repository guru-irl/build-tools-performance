import React from 'react';
const LABEL_37501 = 'component_37501';
export function Component37501({ value = 37501, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37501, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37501, 'data-value': derived.doubled }, children);
}
export default Component37501;
