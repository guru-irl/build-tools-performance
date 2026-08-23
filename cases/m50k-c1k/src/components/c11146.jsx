import React from 'react';
const LABEL_11146 = 'component_11146';
export function Component11146({ value = 11146, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11146, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11146, 'data-value': derived.doubled }, children);
}
export default Component11146;
