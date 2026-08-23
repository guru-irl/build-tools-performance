import React from 'react';
const LABEL_16147 = 'component_16147';
export function Component16147({ value = 16147, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16147, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16147, 'data-value': derived.doubled }, children);
}
export default Component16147;
