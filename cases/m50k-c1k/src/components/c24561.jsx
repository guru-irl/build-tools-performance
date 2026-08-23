import React from 'react';
const LABEL_24561 = 'component_24561';
export function Component24561({ value = 24561, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24561, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24561, 'data-value': derived.doubled }, children);
}
export default Component24561;
