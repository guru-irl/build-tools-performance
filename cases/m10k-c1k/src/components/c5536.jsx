import React from 'react';
const LABEL_5536 = 'component_5536';
export function Component5536({ value = 5536, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5536, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5536, 'data-value': derived.doubled }, children);
}
export default Component5536;
