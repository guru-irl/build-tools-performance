import React from 'react';
const LABEL_28419 = 'component_28419';
export function Component28419({ value = 28419, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28419, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28419, 'data-value': derived.doubled }, children);
}
export default Component28419;
