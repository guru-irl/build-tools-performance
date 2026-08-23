import React from 'react';
const LABEL_5237 = 'component_5237';
export function Component5237({ value = 5237, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5237, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5237, 'data-value': derived.doubled }, children);
}
export default Component5237;
