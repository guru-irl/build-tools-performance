import React from 'react';
const LABEL_4904 = 'component_4904';
export function Component4904({ value = 4904, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4904, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4904, 'data-value': derived.doubled }, children);
}
export default Component4904;
