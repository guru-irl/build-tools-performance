import React from 'react';
const LABEL_7097 = 'component_7097';
export function Component7097({ value = 7097, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7097, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7097, 'data-value': derived.doubled }, children);
}
export default Component7097;
