import React from 'react';
const LABEL_29005 = 'component_29005';
export function Component29005({ value = 29005, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29005, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29005, 'data-value': derived.doubled }, children);
}
export default Component29005;
