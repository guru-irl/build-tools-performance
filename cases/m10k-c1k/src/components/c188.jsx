import React from 'react';
const LABEL_188 = 'component_188';
export function Component188({ value = 188, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_188, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_188, 'data-value': derived.doubled }, children);
}
export default Component188;
