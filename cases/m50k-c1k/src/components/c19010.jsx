import React from 'react';
const LABEL_19010 = 'component_19010';
export function Component19010({ value = 19010, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19010, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19010, 'data-value': derived.doubled }, children);
}
export default Component19010;
