import React from 'react';
const LABEL_29840 = 'component_29840';
export function Component29840({ value = 29840, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29840, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29840, 'data-value': derived.doubled }, children);
}
export default Component29840;
