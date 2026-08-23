import React from 'react';
const LABEL_22752 = 'component_22752';
export function Component22752({ value = 22752, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22752, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22752, 'data-value': derived.doubled }, children);
}
export default Component22752;
