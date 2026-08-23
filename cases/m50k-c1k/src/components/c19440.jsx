import React from 'react';
const LABEL_19440 = 'component_19440';
export function Component19440({ value = 19440, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19440, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19440, 'data-value': derived.doubled }, children);
}
export default Component19440;
