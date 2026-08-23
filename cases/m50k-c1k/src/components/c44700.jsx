import React from 'react';
const LABEL_44700 = 'component_44700';
export function Component44700({ value = 44700, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44700, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44700, 'data-value': derived.doubled }, children);
}
export default Component44700;
