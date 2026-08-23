import React from 'react';
const LABEL_16781 = 'component_16781';
export function Component16781({ value = 16781, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16781, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16781, 'data-value': derived.doubled }, children);
}
export default Component16781;
