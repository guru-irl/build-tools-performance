import React from 'react';
const LABEL_18365 = 'component_18365';
export function Component18365({ value = 18365, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18365, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18365, 'data-value': derived.doubled }, children);
}
export default Component18365;
