import React from 'react';
const LABEL_24507 = 'component_24507';
export function Component24507({ value = 24507, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24507, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24507, 'data-value': derived.doubled }, children);
}
export default Component24507;
