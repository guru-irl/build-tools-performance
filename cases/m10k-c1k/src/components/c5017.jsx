import React from 'react';
const LABEL_5017 = 'component_5017';
export function Component5017({ value = 5017, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5017, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5017, 'data-value': derived.doubled }, children);
}
export default Component5017;
