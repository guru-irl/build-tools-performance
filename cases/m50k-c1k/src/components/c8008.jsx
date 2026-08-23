import React from 'react';
const LABEL_8008 = 'component_8008';
export function Component8008({ value = 8008, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8008, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8008, 'data-value': derived.doubled }, children);
}
export default Component8008;
