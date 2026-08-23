import React from 'react';
const LABEL_18449 = 'component_18449';
export function Component18449({ value = 18449, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18449, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18449, 'data-value': derived.doubled }, children);
}
export default Component18449;
