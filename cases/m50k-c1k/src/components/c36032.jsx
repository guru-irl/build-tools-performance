import React from 'react';
const LABEL_36032 = 'component_36032';
export function Component36032({ value = 36032, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36032, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36032, 'data-value': derived.doubled }, children);
}
export default Component36032;
