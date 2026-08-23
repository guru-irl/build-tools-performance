import React from 'react';
const LABEL_16561 = 'component_16561';
export function Component16561({ value = 16561, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16561, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16561, 'data-value': derived.doubled }, children);
}
export default Component16561;
