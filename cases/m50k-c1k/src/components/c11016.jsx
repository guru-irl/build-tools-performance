import React from 'react';
const LABEL_11016 = 'component_11016';
export function Component11016({ value = 11016, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11016, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11016, 'data-value': derived.doubled }, children);
}
export default Component11016;
