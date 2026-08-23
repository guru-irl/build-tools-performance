import React from 'react';
const LABEL_39496 = 'component_39496';
export function Component39496({ value = 39496, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39496, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39496, 'data-value': derived.doubled }, children);
}
export default Component39496;
