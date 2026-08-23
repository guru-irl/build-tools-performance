import React from 'react';
const LABEL_18720 = 'component_18720';
export function Component18720({ value = 18720, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18720, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18720, 'data-value': derived.doubled }, children);
}
export default Component18720;
