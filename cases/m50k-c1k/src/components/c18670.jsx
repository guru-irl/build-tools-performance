import React from 'react';
const LABEL_18670 = 'component_18670';
export function Component18670({ value = 18670, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18670, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18670, 'data-value': derived.doubled }, children);
}
export default Component18670;
