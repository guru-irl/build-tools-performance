import React from 'react';
const LABEL_33152 = 'component_33152';
export function Component33152({ value = 33152, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33152, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33152, 'data-value': derived.doubled }, children);
}
export default Component33152;
