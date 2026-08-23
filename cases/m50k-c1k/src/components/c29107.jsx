import React from 'react';
const LABEL_29107 = 'component_29107';
export function Component29107({ value = 29107, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29107, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29107, 'data-value': derived.doubled }, children);
}
export default Component29107;
