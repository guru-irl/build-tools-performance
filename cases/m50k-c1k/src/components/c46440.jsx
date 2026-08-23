import React from 'react';
const LABEL_46440 = 'component_46440';
export function Component46440({ value = 46440, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46440, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46440, 'data-value': derived.doubled }, children);
}
export default Component46440;
