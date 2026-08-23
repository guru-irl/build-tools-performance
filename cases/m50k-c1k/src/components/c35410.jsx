import React from 'react';
const LABEL_35410 = 'component_35410';
export function Component35410({ value = 35410, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35410, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35410, 'data-value': derived.doubled }, children);
}
export default Component35410;
