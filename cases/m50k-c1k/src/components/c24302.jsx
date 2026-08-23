import React from 'react';
const LABEL_24302 = 'component_24302';
export function Component24302({ value = 24302, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24302, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24302, 'data-value': derived.doubled }, children);
}
export default Component24302;
