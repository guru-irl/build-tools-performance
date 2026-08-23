import React from 'react';
const LABEL_11588 = 'component_11588';
export function Component11588({ value = 11588, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11588, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11588, 'data-value': derived.doubled }, children);
}
export default Component11588;
