import React from 'react';
const LABEL_19588 = 'component_19588';
export function Component19588({ value = 19588, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19588, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19588, 'data-value': derived.doubled }, children);
}
export default Component19588;
