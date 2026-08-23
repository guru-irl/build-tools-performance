import React from 'react';
const LABEL_42684 = 'component_42684';
export function Component42684({ value = 42684, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42684, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42684, 'data-value': derived.doubled }, children);
}
export default Component42684;
