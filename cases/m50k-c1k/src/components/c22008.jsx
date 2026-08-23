import React from 'react';
const LABEL_22008 = 'component_22008';
export function Component22008({ value = 22008, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22008, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22008, 'data-value': derived.doubled }, children);
}
export default Component22008;
