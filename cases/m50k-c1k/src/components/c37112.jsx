import React from 'react';
const LABEL_37112 = 'component_37112';
export function Component37112({ value = 37112, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37112, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37112, 'data-value': derived.doubled }, children);
}
export default Component37112;
