import React from 'react';
const LABEL_44011 = 'component_44011';
export function Component44011({ value = 44011, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44011, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44011, 'data-value': derived.doubled }, children);
}
export default Component44011;
