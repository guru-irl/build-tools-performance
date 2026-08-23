import React from 'react';
const LABEL_40302 = 'component_40302';
export function Component40302({ value = 40302, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40302, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40302, 'data-value': derived.doubled }, children);
}
export default Component40302;
