import React from 'react';
const LABEL_37681 = 'component_37681';
export function Component37681({ value = 37681, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37681, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37681, 'data-value': derived.doubled }, children);
}
export default Component37681;
