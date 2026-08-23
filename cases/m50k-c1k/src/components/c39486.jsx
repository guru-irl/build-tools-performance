import React from 'react';
const LABEL_39486 = 'component_39486';
export function Component39486({ value = 39486, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39486, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39486, 'data-value': derived.doubled }, children);
}
export default Component39486;
