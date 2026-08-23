import React from 'react';
const LABEL_19587 = 'component_19587';
export function Component19587({ value = 19587, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19587, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19587, 'data-value': derived.doubled }, children);
}
export default Component19587;
