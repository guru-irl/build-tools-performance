import React from 'react';
const LABEL_27977 = 'component_27977';
export function Component27977({ value = 27977, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27977, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27977, 'data-value': derived.doubled }, children);
}
export default Component27977;
