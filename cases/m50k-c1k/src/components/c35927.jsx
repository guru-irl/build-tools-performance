import React from 'react';
const LABEL_35927 = 'component_35927';
export function Component35927({ value = 35927, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35927, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35927, 'data-value': derived.doubled }, children);
}
export default Component35927;
