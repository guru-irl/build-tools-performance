import React from 'react';
const LABEL_35935 = 'component_35935';
export function Component35935({ value = 35935, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35935, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35935, 'data-value': derived.doubled }, children);
}
export default Component35935;
