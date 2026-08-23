import React from 'react';
const LABEL_34143 = 'component_34143';
export function Component34143({ value = 34143, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34143, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34143, 'data-value': derived.doubled }, children);
}
export default Component34143;
