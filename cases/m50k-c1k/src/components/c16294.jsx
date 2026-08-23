import React from 'react';
const LABEL_16294 = 'component_16294';
export function Component16294({ value = 16294, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16294, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16294, 'data-value': derived.doubled }, children);
}
export default Component16294;
