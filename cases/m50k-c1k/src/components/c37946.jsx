import React from 'react';
const LABEL_37946 = 'component_37946';
export function Component37946({ value = 37946, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37946, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37946, 'data-value': derived.doubled }, children);
}
export default Component37946;
