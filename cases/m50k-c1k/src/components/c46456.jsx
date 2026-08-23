import React from 'react';
const LABEL_46456 = 'component_46456';
export function Component46456({ value = 46456, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46456, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46456, 'data-value': derived.doubled }, children);
}
export default Component46456;
