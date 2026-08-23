import React from 'react';
const LABEL_5927 = 'component_5927';
export function Component5927({ value = 5927, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5927, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5927, 'data-value': derived.doubled }, children);
}
export default Component5927;
