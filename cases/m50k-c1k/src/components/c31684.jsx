import React from 'react';
const LABEL_31684 = 'component_31684';
export function Component31684({ value = 31684, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31684, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31684, 'data-value': derived.doubled }, children);
}
export default Component31684;
