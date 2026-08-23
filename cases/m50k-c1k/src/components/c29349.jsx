import React from 'react';
const LABEL_29349 = 'component_29349';
export function Component29349({ value = 29349, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29349, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29349, 'data-value': derived.doubled }, children);
}
export default Component29349;
