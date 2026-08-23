import React from 'react';
const LABEL_11444 = 'component_11444';
export function Component11444({ value = 11444, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11444, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11444, 'data-value': derived.doubled }, children);
}
export default Component11444;
