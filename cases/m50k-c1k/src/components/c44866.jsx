import React from 'react';
const LABEL_44866 = 'component_44866';
export function Component44866({ value = 44866, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44866, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44866, 'data-value': derived.doubled }, children);
}
export default Component44866;
