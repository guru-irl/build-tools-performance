import React from 'react';
const LABEL_9008 = 'component_9008';
export function Component9008({ value = 9008, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9008, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9008, 'data-value': derived.doubled }, children);
}
export default Component9008;
