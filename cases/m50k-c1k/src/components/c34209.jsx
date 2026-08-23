import React from 'react';
const LABEL_34209 = 'component_34209';
export function Component34209({ value = 34209, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34209, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34209, 'data-value': derived.doubled }, children);
}
export default Component34209;
