import React from 'react';
const LABEL_29263 = 'component_29263';
export function Component29263({ value = 29263, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29263, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29263, 'data-value': derived.doubled }, children);
}
export default Component29263;
