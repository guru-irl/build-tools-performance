import React from 'react';
const LABEL_43430 = 'component_43430';
export function Component43430({ value = 43430, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43430, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43430, 'data-value': derived.doubled }, children);
}
export default Component43430;
