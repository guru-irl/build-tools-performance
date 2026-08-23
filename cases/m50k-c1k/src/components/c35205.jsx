import React from 'react';
const LABEL_35205 = 'component_35205';
export function Component35205({ value = 35205, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35205, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35205, 'data-value': derived.doubled }, children);
}
export default Component35205;
