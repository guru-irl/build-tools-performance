import React from 'react';
const LABEL_27788 = 'component_27788';
export function Component27788({ value = 27788, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27788, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27788, 'data-value': derived.doubled }, children);
}
export default Component27788;
