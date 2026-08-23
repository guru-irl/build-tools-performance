import React from 'react';
const LABEL_41099 = 'component_41099';
export function Component41099({ value = 41099, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41099, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41099, 'data-value': derived.doubled }, children);
}
export default Component41099;
