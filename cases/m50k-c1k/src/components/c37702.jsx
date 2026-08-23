import React from 'react';
const LABEL_37702 = 'component_37702';
export function Component37702({ value = 37702, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37702, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37702, 'data-value': derived.doubled }, children);
}
export default Component37702;
