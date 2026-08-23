import React from 'react';
const LABEL_16302 = 'component_16302';
export function Component16302({ value = 16302, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16302, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16302, 'data-value': derived.doubled }, children);
}
export default Component16302;
