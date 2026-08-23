import React from 'react';
const LABEL_32816 = 'component_32816';
export function Component32816({ value = 32816, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32816, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32816, 'data-value': derived.doubled }, children);
}
export default Component32816;
