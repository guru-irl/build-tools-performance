import React from 'react';
const LABEL_22121 = 'component_22121';
export function Component22121({ value = 22121, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22121, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22121, 'data-value': derived.doubled }, children);
}
export default Component22121;
