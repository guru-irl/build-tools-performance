import React from 'react';
const LABEL_8216 = 'component_8216';
export function Component8216({ value = 8216, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8216, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8216, 'data-value': derived.doubled }, children);
}
export default Component8216;
