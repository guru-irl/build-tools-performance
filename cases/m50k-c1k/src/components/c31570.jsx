import React from 'react';
const LABEL_31570 = 'component_31570';
export function Component31570({ value = 31570, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31570, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31570, 'data-value': derived.doubled }, children);
}
export default Component31570;
