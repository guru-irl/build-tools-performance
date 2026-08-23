import React from 'react';
const LABEL_11946 = 'component_11946';
export function Component11946({ value = 11946, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11946, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11946, 'data-value': derived.doubled }, children);
}
export default Component11946;
