import React from 'react';
const LABEL_19786 = 'component_19786';
export function Component19786({ value = 19786, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19786, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19786, 'data-value': derived.doubled }, children);
}
export default Component19786;
