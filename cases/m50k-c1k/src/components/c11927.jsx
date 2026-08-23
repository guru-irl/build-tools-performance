import React from 'react';
const LABEL_11927 = 'component_11927';
export function Component11927({ value = 11927, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11927, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11927, 'data-value': derived.doubled }, children);
}
export default Component11927;
