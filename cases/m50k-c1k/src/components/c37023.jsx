import React from 'react';
const LABEL_37023 = 'component_37023';
export function Component37023({ value = 37023, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37023, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37023, 'data-value': derived.doubled }, children);
}
export default Component37023;
