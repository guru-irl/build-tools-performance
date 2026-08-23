import React from 'react';
const LABEL_37178 = 'component_37178';
export function Component37178({ value = 37178, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37178, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37178, 'data-value': derived.doubled }, children);
}
export default Component37178;
