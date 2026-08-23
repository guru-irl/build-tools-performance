import React from 'react';
const LABEL_33700 = 'component_33700';
export function Component33700({ value = 33700, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33700, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33700, 'data-value': derived.doubled }, children);
}
export default Component33700;
