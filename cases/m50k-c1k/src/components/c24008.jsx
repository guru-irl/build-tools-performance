import React from 'react';
const LABEL_24008 = 'component_24008';
export function Component24008({ value = 24008, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24008, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24008, 'data-value': derived.doubled }, children);
}
export default Component24008;
