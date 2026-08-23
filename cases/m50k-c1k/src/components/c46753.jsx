import React from 'react';
const LABEL_46753 = 'component_46753';
export function Component46753({ value = 46753, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46753, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46753, 'data-value': derived.doubled }, children);
}
export default Component46753;
