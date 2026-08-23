import React from 'react';
const LABEL_8681 = 'component_8681';
export function Component8681({ value = 8681, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8681, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8681, 'data-value': derived.doubled }, children);
}
export default Component8681;
