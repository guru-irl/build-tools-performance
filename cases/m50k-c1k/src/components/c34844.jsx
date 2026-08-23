import React from 'react';
const LABEL_34844 = 'component_34844';
export function Component34844({ value = 34844, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34844, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34844, 'data-value': derived.doubled }, children);
}
export default Component34844;
