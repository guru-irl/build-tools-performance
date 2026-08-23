import React from 'react';
const LABEL_20536 = 'component_20536';
export function Component20536({ value = 20536, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20536, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20536, 'data-value': derived.doubled }, children);
}
export default Component20536;
