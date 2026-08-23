import React from 'react';
const LABEL_29946 = 'component_29946';
export function Component29946({ value = 29946, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29946, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29946, 'data-value': derived.doubled }, children);
}
export default Component29946;
