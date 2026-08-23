import React from 'react';
const LABEL_30440 = 'component_30440';
export function Component30440({ value = 30440, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30440, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30440, 'data-value': derived.doubled }, children);
}
export default Component30440;
