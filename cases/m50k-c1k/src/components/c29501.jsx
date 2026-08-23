import React from 'react';
const LABEL_29501 = 'component_29501';
export function Component29501({ value = 29501, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29501, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29501, 'data-value': derived.doubled }, children);
}
export default Component29501;
