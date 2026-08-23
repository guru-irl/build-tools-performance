import React from 'react';
const LABEL_16188 = 'component_16188';
export function Component16188({ value = 16188, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16188, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16188, 'data-value': derived.doubled }, children);
}
export default Component16188;
