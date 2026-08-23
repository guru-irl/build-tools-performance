import React from 'react';
const LABEL_35237 = 'component_35237';
export function Component35237({ value = 35237, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35237, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35237, 'data-value': derived.doubled }, children);
}
export default Component35237;
