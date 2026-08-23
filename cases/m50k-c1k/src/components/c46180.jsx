import React from 'react';
const LABEL_46180 = 'component_46180';
export function Component46180({ value = 46180, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46180, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46180, 'data-value': derived.doubled }, children);
}
export default Component46180;
