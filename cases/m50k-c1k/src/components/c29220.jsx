import React from 'react';
const LABEL_29220 = 'component_29220';
export function Component29220({ value = 29220, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29220, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29220, 'data-value': derived.doubled }, children);
}
export default Component29220;
