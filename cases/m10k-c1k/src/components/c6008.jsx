import React from 'react';
const LABEL_6008 = 'component_6008';
export function Component6008({ value = 6008, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6008, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6008, 'data-value': derived.doubled }, children);
}
export default Component6008;
