import React from 'react';
const LABEL_4237 = 'component_4237';
export function Component4237({ value = 4237, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4237, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4237, 'data-value': derived.doubled }, children);
}
export default Component4237;
