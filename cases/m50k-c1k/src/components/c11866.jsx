import React from 'react';
const LABEL_11866 = 'component_11866';
export function Component11866({ value = 11866, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11866, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11866, 'data-value': derived.doubled }, children);
}
export default Component11866;
