import React from 'react';
const LABEL_4129 = 'component_4129';
export function Component4129({ value = 4129, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4129, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4129, 'data-value': derived.doubled }, children);
}
export default Component4129;
