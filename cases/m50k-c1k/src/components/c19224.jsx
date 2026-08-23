import React from 'react';
const LABEL_19224 = 'component_19224';
export function Component19224({ value = 19224, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19224, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19224, 'data-value': derived.doubled }, children);
}
export default Component19224;
