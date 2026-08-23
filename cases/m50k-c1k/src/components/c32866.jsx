import React from 'react';
const LABEL_32866 = 'component_32866';
export function Component32866({ value = 32866, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32866, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32866, 'data-value': derived.doubled }, children);
}
export default Component32866;
