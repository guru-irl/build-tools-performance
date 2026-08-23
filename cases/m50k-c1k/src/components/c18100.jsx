import React from 'react';
const LABEL_18100 = 'component_18100';
export function Component18100({ value = 18100, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18100, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18100, 'data-value': derived.doubled }, children);
}
export default Component18100;
