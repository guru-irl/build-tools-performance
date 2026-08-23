import React from 'react';
const LABEL_6916 = 'component_6916';
export function Component6916({ value = 6916, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6916, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6916, 'data-value': derived.doubled }, children);
}
export default Component6916;
