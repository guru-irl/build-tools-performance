import React from 'react';
const LABEL_19334 = 'component_19334';
export function Component19334({ value = 19334, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19334, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19334, 'data-value': derived.doubled }, children);
}
export default Component19334;
