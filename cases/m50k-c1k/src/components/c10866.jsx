import React from 'react';
const LABEL_10866 = 'component_10866';
export function Component10866({ value = 10866, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10866, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10866, 'data-value': derived.doubled }, children);
}
export default Component10866;
