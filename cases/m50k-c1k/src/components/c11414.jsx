import React from 'react';
const LABEL_11414 = 'component_11414';
export function Component11414({ value = 11414, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11414, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11414, 'data-value': derived.doubled }, children);
}
export default Component11414;
