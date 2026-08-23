import React from 'react';
const LABEL_16644 = 'component_16644';
export function Component16644({ value = 16644, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16644, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16644, 'data-value': derived.doubled }, children);
}
export default Component16644;
