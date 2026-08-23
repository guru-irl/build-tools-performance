import React from 'react';
const LABEL_34657 = 'component_34657';
export function Component34657({ value = 34657, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34657, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34657, 'data-value': derived.doubled }, children);
}
export default Component34657;
