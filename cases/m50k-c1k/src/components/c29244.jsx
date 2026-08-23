import React from 'react';
const LABEL_29244 = 'component_29244';
export function Component29244({ value = 29244, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29244, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29244, 'data-value': derived.doubled }, children);
}
export default Component29244;
