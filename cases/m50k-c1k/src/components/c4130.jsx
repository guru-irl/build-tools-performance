import React from 'react';
const LABEL_4130 = 'component_4130';
export function Component4130({ value = 4130, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4130, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4130, 'data-value': derived.doubled }, children);
}
export default Component4130;
