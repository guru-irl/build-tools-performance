import React from 'react';
const LABEL_11855 = 'component_11855';
export function Component11855({ value = 11855, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11855, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11855, 'data-value': derived.doubled }, children);
}
export default Component11855;
