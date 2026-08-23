import React from 'react';
const LABEL_6699 = 'component_6699';
export function Component6699({ value = 6699, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6699, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6699, 'data-value': derived.doubled }, children);
}
export default Component6699;
