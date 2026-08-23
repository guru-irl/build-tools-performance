import React from 'react';
const LABEL_35008 = 'component_35008';
export function Component35008({ value = 35008, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35008, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35008, 'data-value': derived.doubled }, children);
}
export default Component35008;
