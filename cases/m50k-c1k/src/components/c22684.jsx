import React from 'react';
const LABEL_22684 = 'component_22684';
export function Component22684({ value = 22684, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22684, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22684, 'data-value': derived.doubled }, children);
}
export default Component22684;
