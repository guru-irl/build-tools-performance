import React from 'react';
const LABEL_989 = 'component_989';
export function Component989({ value = 989, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_989, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_989, 'data-value': derived.doubled }, children);
}
export default Component989;
