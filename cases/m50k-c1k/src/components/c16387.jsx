import React from 'react';
const LABEL_16387 = 'component_16387';
export function Component16387({ value = 16387, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16387, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16387, 'data-value': derived.doubled }, children);
}
export default Component16387;
