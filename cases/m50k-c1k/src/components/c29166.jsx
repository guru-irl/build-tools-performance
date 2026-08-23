import React from 'react';
const LABEL_29166 = 'component_29166';
export function Component29166({ value = 29166, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29166, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29166, 'data-value': derived.doubled }, children);
}
export default Component29166;
