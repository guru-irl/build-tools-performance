import React from 'react';
const LABEL_7302 = 'component_7302';
export function Component7302({ value = 7302, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7302, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7302, 'data-value': derived.doubled }, children);
}
export default Component7302;
