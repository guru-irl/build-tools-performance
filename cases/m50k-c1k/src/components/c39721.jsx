import React from 'react';
const LABEL_39721 = 'component_39721';
export function Component39721({ value = 39721, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39721, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39721, 'data-value': derived.doubled }, children);
}
export default Component39721;
