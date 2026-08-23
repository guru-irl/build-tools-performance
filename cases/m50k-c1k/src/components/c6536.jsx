import React from 'react';
const LABEL_6536 = 'component_6536';
export function Component6536({ value = 6536, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6536, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6536, 'data-value': derived.doubled }, children);
}
export default Component6536;
