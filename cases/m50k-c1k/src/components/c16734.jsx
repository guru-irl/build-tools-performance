import React from 'react';
const LABEL_16734 = 'component_16734';
export function Component16734({ value = 16734, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16734, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16734, 'data-value': derived.doubled }, children);
}
export default Component16734;
