import React from 'react';
const LABEL_28675 = 'component_28675';
export function Component28675({ value = 28675, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28675, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28675, 'data-value': derived.doubled }, children);
}
export default Component28675;
