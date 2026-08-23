import React from 'react';
const LABEL_704 = 'component_704';
export function Component704({ value = 704, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_704, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_704, 'data-value': derived.doubled }, children);
}
export default Component704;
