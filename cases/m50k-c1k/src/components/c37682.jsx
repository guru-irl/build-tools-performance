import React from 'react';
const LABEL_37682 = 'component_37682';
export function Component37682({ value = 37682, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37682, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37682, 'data-value': derived.doubled }, children);
}
export default Component37682;
