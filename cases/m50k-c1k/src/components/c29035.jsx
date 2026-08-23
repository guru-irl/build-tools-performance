import React from 'react';
const LABEL_29035 = 'component_29035';
export function Component29035({ value = 29035, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29035, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29035, 'data-value': derived.doubled }, children);
}
export default Component29035;
