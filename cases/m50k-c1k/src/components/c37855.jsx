import React from 'react';
const LABEL_37855 = 'component_37855';
export function Component37855({ value = 37855, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37855, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37855, 'data-value': derived.doubled }, children);
}
export default Component37855;
