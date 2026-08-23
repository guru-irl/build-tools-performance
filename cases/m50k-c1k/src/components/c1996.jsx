import React from 'react';
const LABEL_1996 = 'component_1996';
export function Component1996({ value = 1996, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1996, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1996, 'data-value': derived.doubled }, children);
}
export default Component1996;
