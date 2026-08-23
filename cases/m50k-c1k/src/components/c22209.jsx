import React from 'react';
const LABEL_22209 = 'component_22209';
export function Component22209({ value = 22209, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22209, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22209, 'data-value': derived.doubled }, children);
}
export default Component22209;
