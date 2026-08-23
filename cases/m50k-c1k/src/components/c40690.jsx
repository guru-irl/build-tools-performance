import React from 'react';
const LABEL_40690 = 'component_40690';
export function Component40690({ value = 40690, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40690, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40690, 'data-value': derived.doubled }, children);
}
export default Component40690;
