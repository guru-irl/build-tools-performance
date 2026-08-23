import React from 'react';
const LABEL_28137 = 'component_28137';
export function Component28137({ value = 28137, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28137, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28137, 'data-value': derived.doubled }, children);
}
export default Component28137;
