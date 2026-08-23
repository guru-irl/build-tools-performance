import React from 'react';
const LABEL_23356 = 'component_23356';
export function Component23356({ value = 23356, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23356, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23356, 'data-value': derived.doubled }, children);
}
export default Component23356;
