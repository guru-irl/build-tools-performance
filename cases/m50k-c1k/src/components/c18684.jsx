import React from 'react';
const LABEL_18684 = 'component_18684';
export function Component18684({ value = 18684, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18684, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18684, 'data-value': derived.doubled }, children);
}
export default Component18684;
