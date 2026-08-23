import React from 'react';
const LABEL_19681 = 'component_19681';
export function Component19681({ value = 19681, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19681, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19681, 'data-value': derived.doubled }, children);
}
export default Component19681;
