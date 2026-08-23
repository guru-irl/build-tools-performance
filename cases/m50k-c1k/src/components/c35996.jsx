import React from 'react';
const LABEL_35996 = 'component_35996';
export function Component35996({ value = 35996, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35996, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35996, 'data-value': derived.doubled }, children);
}
export default Component35996;
