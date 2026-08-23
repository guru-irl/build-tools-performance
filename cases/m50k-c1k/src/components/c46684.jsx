import React from 'react';
const LABEL_46684 = 'component_46684';
export function Component46684({ value = 46684, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46684, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46684, 'data-value': derived.doubled }, children);
}
export default Component46684;
