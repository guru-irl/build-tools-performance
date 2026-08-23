import React from 'react';
const LABEL_41293 = 'component_41293';
export function Component41293({ value = 41293, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41293, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41293, 'data-value': derived.doubled }, children);
}
export default Component41293;
