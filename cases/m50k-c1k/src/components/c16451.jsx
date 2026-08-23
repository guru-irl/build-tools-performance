import React from 'react';
const LABEL_16451 = 'component_16451';
export function Component16451({ value = 16451, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16451, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16451, 'data-value': derived.doubled }, children);
}
export default Component16451;
