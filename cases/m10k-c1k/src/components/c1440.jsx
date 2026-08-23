import React from 'react';
const LABEL_1440 = 'component_1440';
export function Component1440({ value = 1440, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1440, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1440, 'data-value': derived.doubled }, children);
}
export default Component1440;
