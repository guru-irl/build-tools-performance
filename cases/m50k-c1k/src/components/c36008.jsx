import React from 'react';
const LABEL_36008 = 'component_36008';
export function Component36008({ value = 36008, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36008, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36008, 'data-value': derived.doubled }, children);
}
export default Component36008;
