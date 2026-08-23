import React from 'react';
const LABEL_19074 = 'component_19074';
export function Component19074({ value = 19074, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19074, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19074, 'data-value': derived.doubled }, children);
}
export default Component19074;
