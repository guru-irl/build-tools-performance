import React from 'react';
const LABEL_29927 = 'component_29927';
export function Component29927({ value = 29927, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29927, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29927, 'data-value': derived.doubled }, children);
}
export default Component29927;
