import React from 'react';
const LABEL_19777 = 'component_19777';
export function Component19777({ value = 19777, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19777, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19777, 'data-value': derived.doubled }, children);
}
export default Component19777;
