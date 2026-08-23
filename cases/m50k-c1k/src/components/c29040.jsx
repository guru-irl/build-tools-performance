import React from 'react';
const LABEL_29040 = 'component_29040';
export function Component29040({ value = 29040, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29040, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29040, 'data-value': derived.doubled }, children);
}
export default Component29040;
