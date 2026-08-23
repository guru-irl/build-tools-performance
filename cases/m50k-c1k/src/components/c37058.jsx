import React from 'react';
const LABEL_37058 = 'component_37058';
export function Component37058({ value = 37058, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37058, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37058, 'data-value': derived.doubled }, children);
}
export default Component37058;
