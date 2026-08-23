import React from 'react';
const LABEL_43657 = 'component_43657';
export function Component43657({ value = 43657, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43657, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43657, 'data-value': derived.doubled }, children);
}
export default Component43657;
