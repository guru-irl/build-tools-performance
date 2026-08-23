import React from 'react';
const LABEL_25684 = 'component_25684';
export function Component25684({ value = 25684, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25684, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25684, 'data-value': derived.doubled }, children);
}
export default Component25684;
