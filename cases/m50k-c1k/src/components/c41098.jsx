import React from 'react';
const LABEL_41098 = 'component_41098';
export function Component41098({ value = 41098, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41098, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41098, 'data-value': derived.doubled }, children);
}
export default Component41098;
