import React from 'react';
const LABEL_35501 = 'component_35501';
export function Component35501({ value = 35501, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35501, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35501, 'data-value': derived.doubled }, children);
}
export default Component35501;
