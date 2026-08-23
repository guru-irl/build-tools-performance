import React from 'react';
const LABEL_30684 = 'component_30684';
export function Component30684({ value = 30684, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30684, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30684, 'data-value': derived.doubled }, children);
}
export default Component30684;
