import React from 'react';
const LABEL_6440 = 'component_6440';
export function Component6440({ value = 6440, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6440, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6440, 'data-value': derived.doubled }, children);
}
export default Component6440;
