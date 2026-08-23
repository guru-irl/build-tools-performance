import React from 'react';
const LABEL_6036 = 'component_6036';
export function Component6036({ value = 6036, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6036, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6036, 'data-value': derived.doubled }, children);
}
export default Component6036;
