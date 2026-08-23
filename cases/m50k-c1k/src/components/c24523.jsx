import React from 'react';
const LABEL_24523 = 'component_24523';
export function Component24523({ value = 24523, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24523, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24523, 'data-value': derived.doubled }, children);
}
export default Component24523;
