import React from 'react';
const LABEL_29543 = 'component_29543';
export function Component29543({ value = 29543, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29543, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29543, 'data-value': derived.doubled }, children);
}
export default Component29543;
