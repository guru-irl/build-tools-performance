import React from 'react';
const LABEL_30417 = 'component_30417';
export function Component30417({ value = 30417, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30417, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30417, 'data-value': derived.doubled }, children);
}
export default Component30417;
