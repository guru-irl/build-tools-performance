import React from 'react';
const LABEL_19152 = 'component_19152';
export function Component19152({ value = 19152, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19152, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19152, 'data-value': derived.doubled }, children);
}
export default Component19152;
