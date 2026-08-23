import React from 'react';
const LABEL_29417 = 'component_29417';
export function Component29417({ value = 29417, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29417, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29417, 'data-value': derived.doubled }, children);
}
export default Component29417;
