import React from 'react';
const LABEL_37927 = 'component_37927';
export function Component37927({ value = 37927, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37927, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37927, 'data-value': derived.doubled }, children);
}
export default Component37927;
