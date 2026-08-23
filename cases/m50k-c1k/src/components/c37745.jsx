import React from 'react';
const LABEL_37745 = 'component_37745';
export function Component37745({ value = 37745, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37745, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37745, 'data-value': derived.doubled }, children);
}
export default Component37745;
