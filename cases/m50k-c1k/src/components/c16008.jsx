import React from 'react';
const LABEL_16008 = 'component_16008';
export function Component16008({ value = 16008, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16008, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16008, 'data-value': derived.doubled }, children);
}
export default Component16008;
