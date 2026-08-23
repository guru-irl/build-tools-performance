import React from 'react';
const LABEL_29008 = 'component_29008';
export function Component29008({ value = 29008, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29008, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29008, 'data-value': derived.doubled }, children);
}
export default Component29008;
