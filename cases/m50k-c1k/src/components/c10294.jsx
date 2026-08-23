import React from 'react';
const LABEL_10294 = 'component_10294';
export function Component10294({ value = 10294, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10294, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10294, 'data-value': derived.doubled }, children);
}
export default Component10294;
