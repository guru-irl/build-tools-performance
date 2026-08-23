import React from 'react';
const LABEL_12008 = 'component_12008';
export function Component12008({ value = 12008, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12008, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12008, 'data-value': derived.doubled }, children);
}
export default Component12008;
