import React from 'react';
const LABEL_19946 = 'component_19946';
export function Component19946({ value = 19946, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19946, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19946, 'data-value': derived.doubled }, children);
}
export default Component19946;
