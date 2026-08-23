import React from 'react';
const LABEL_11082 = 'component_11082';
export function Component11082({ value = 11082, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11082, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11082, 'data-value': derived.doubled }, children);
}
export default Component11082;
