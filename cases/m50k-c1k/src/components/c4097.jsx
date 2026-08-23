import React from 'react';
const LABEL_4097 = 'component_4097';
export function Component4097({ value = 4097, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4097, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4097, 'data-value': derived.doubled }, children);
}
export default Component4097;
