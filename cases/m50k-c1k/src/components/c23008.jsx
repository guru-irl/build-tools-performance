import React from 'react';
const LABEL_23008 = 'component_23008';
export function Component23008({ value = 23008, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23008, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23008, 'data-value': derived.doubled }, children);
}
export default Component23008;
