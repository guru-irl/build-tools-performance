import React from 'react';
const LABEL_39297 = 'component_39297';
export function Component39297({ value = 39297, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39297, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39297, 'data-value': derived.doubled }, children);
}
export default Component39297;
