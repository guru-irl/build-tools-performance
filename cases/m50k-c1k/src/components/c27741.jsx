import React from 'react';
const LABEL_27741 = 'component_27741';
export function Component27741({ value = 27741, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27741, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27741, 'data-value': derived.doubled }, children);
}
export default Component27741;
