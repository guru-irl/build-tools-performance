import React from 'react';
const LABEL_5374 = 'component_5374';
export function Component5374({ value = 5374, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5374, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5374, 'data-value': derived.doubled }, children);
}
export default Component5374;
