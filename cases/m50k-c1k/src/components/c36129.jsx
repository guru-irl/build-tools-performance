import React from 'react';
const LABEL_36129 = 'component_36129';
export function Component36129({ value = 36129, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36129, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36129, 'data-value': derived.doubled }, children);
}
export default Component36129;
