import React from 'react';
const LABEL_18130 = 'component_18130';
export function Component18130({ value = 18130, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18130, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18130, 'data-value': derived.doubled }, children);
}
export default Component18130;
