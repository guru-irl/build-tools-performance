import React from 'react';
const LABEL_16121 = 'component_16121';
export function Component16121({ value = 16121, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16121, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16121, 'data-value': derived.doubled }, children);
}
export default Component16121;
