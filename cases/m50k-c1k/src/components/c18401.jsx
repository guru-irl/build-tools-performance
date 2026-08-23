import React from 'react';
const LABEL_18401 = 'component_18401';
export function Component18401({ value = 18401, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18401, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18401, 'data-value': derived.doubled }, children);
}
export default Component18401;
