import React from 'react';
const LABEL_41682 = 'component_41682';
export function Component41682({ value = 41682, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41682, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41682, 'data-value': derived.doubled }, children);
}
export default Component41682;
