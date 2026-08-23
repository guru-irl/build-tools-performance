import React from 'react';
const LABEL_46179 = 'component_46179';
export function Component46179({ value = 46179, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46179, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46179, 'data-value': derived.doubled }, children);
}
export default Component46179;
