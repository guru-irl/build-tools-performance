import React from 'react';
const LABEL_32008 = 'component_32008';
export function Component32008({ value = 32008, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32008, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32008, 'data-value': derived.doubled }, children);
}
export default Component32008;
