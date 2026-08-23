import React from 'react';
const LABEL_44684 = 'component_44684';
export function Component44684({ value = 44684, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44684, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44684, 'data-value': derived.doubled }, children);
}
export default Component44684;
