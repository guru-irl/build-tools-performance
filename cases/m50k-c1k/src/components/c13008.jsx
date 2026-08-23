import React from 'react';
const LABEL_13008 = 'component_13008';
export function Component13008({ value = 13008, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13008, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13008, 'data-value': derived.doubled }, children);
}
export default Component13008;
