import React from 'react';
const LABEL_26987 = 'component_26987';
export function Component26987({ value = 26987, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26987, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26987, 'data-value': derived.doubled }, children);
}
export default Component26987;
