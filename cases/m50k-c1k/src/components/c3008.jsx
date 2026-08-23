import React from 'react';
const LABEL_3008 = 'component_3008';
export function Component3008({ value = 3008, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3008, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3008, 'data-value': derived.doubled }, children);
}
export default Component3008;
