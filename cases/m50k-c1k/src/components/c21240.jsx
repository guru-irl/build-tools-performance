import React from 'react';
const LABEL_21240 = 'component_21240';
export function Component21240({ value = 21240, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21240, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21240, 'data-value': derived.doubled }, children);
}
export default Component21240;
