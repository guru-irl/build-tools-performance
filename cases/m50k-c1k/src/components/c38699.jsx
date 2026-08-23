import React from 'react';
const LABEL_38699 = 'component_38699';
export function Component38699({ value = 38699, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38699, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38699, 'data-value': derived.doubled }, children);
}
export default Component38699;
