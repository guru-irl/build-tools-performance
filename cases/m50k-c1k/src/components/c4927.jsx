import React from 'react';
const LABEL_4927 = 'component_4927';
export function Component4927({ value = 4927, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4927, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4927, 'data-value': derived.doubled }, children);
}
export default Component4927;
