import React from 'react';
const LABEL_35684 = 'component_35684';
export function Component35684({ value = 35684, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35684, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35684, 'data-value': derived.doubled }, children);
}
export default Component35684;
