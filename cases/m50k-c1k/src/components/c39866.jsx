import React from 'react';
const LABEL_39866 = 'component_39866';
export function Component39866({ value = 39866, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39866, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39866, 'data-value': derived.doubled }, children);
}
export default Component39866;
