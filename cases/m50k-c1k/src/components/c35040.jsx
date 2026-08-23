import React from 'react';
const LABEL_35040 = 'component_35040';
export function Component35040({ value = 35040, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35040, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35040, 'data-value': derived.doubled }, children);
}
export default Component35040;
