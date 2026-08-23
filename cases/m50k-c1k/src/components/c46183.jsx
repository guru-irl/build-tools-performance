import React from 'react';
const LABEL_46183 = 'component_46183';
export function Component46183({ value = 46183, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46183, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46183, 'data-value': derived.doubled }, children);
}
export default Component46183;
