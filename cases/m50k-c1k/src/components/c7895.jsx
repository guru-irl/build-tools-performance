import React from 'react';
const LABEL_7895 = 'component_7895';
export function Component7895({ value = 7895, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7895, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7895, 'data-value': derived.doubled }, children);
}
export default Component7895;
