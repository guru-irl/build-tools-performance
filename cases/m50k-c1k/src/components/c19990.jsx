import React from 'react';
const LABEL_19990 = 'component_19990';
export function Component19990({ value = 19990, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19990, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19990, 'data-value': derived.doubled }, children);
}
export default Component19990;
