import React from 'react';
const LABEL_39078 = 'component_39078';
export function Component39078({ value = 39078, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39078, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39078, 'data-value': derived.doubled }, children);
}
export default Component39078;
