import React from 'react';
const LABEL_31946 = 'component_31946';
export function Component31946({ value = 31946, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31946, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31946, 'data-value': derived.doubled }, children);
}
export default Component31946;
