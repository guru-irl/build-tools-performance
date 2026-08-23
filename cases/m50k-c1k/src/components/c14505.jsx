import React from 'react';
const LABEL_14505 = 'component_14505';
export function Component14505({ value = 14505, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14505, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14505, 'data-value': derived.doubled }, children);
}
export default Component14505;
