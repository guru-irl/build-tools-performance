import React from 'react';
const LABEL_35166 = 'component_35166';
export function Component35166({ value = 35166, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35166, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35166, 'data-value': derived.doubled }, children);
}
export default Component35166;
