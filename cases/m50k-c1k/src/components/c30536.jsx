import React from 'react';
const LABEL_30536 = 'component_30536';
export function Component30536({ value = 30536, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30536, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30536, 'data-value': derived.doubled }, children);
}
export default Component30536;
