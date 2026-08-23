import React from 'react';
const LABEL_29995 = 'component_29995';
export function Component29995({ value = 29995, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29995, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29995, 'data-value': derived.doubled }, children);
}
export default Component29995;
