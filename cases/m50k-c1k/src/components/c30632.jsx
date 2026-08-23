import React from 'react';
const LABEL_30632 = 'component_30632';
export function Component30632({ value = 30632, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30632, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30632, 'data-value': derived.doubled }, children);
}
export default Component30632;
