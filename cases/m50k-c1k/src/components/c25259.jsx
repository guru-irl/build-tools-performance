import React from 'react';
const LABEL_25259 = 'component_25259';
export function Component25259({ value = 25259, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25259, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25259, 'data-value': derived.doubled }, children);
}
export default Component25259;
