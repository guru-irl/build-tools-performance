import React from 'react';
const LABEL_4036 = 'component_4036';
export function Component4036({ value = 4036, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4036, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4036, 'data-value': derived.doubled }, children);
}
export default Component4036;
