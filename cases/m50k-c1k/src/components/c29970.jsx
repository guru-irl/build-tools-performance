import React from 'react';
const LABEL_29970 = 'component_29970';
export function Component29970({ value = 29970, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29970, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29970, 'data-value': derived.doubled }, children);
}
export default Component29970;
