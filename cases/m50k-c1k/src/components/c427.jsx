import React from 'react';
const LABEL_427 = 'component_427';
export function Component427({ value = 427, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_427, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_427, 'data-value': derived.doubled }, children);
}
export default Component427;
