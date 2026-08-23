import React from 'react';
const LABEL_18970 = 'component_18970';
export function Component18970({ value = 18970, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18970, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18970, 'data-value': derived.doubled }, children);
}
export default Component18970;
