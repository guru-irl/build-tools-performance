import React from 'react';
const LABEL_24682 = 'component_24682';
export function Component24682({ value = 24682, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24682, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24682, 'data-value': derived.doubled }, children);
}
export default Component24682;
