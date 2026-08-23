import React from 'react';
const LABEL_28588 = 'component_28588';
export function Component28588({ value = 28588, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28588, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28588, 'data-value': derived.doubled }, children);
}
export default Component28588;
