import React from 'react';
const LABEL_28684 = 'component_28684';
export function Component28684({ value = 28684, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28684, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28684, 'data-value': derived.doubled }, children);
}
export default Component28684;
