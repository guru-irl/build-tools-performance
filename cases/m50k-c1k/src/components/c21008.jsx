import React from 'react';
const LABEL_21008 = 'component_21008';
export function Component21008({ value = 21008, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21008, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21008, 'data-value': derived.doubled }, children);
}
export default Component21008;
