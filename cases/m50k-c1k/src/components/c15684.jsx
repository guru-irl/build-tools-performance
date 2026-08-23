import React from 'react';
const LABEL_15684 = 'component_15684';
export function Component15684({ value = 15684, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15684, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15684, 'data-value': derived.doubled }, children);
}
export default Component15684;
