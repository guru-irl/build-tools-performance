import React from 'react';
const LABEL_8451 = 'component_8451';
export function Component8451({ value = 8451, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8451, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8451, 'data-value': derived.doubled }, children);
}
export default Component8451;
