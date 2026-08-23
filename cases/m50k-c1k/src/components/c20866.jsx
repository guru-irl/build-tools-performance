import React from 'react';
const LABEL_20866 = 'component_20866';
export function Component20866({ value = 20866, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20866, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20866, 'data-value': derived.doubled }, children);
}
export default Component20866;
