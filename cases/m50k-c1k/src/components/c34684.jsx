import React from 'react';
const LABEL_34684 = 'component_34684';
export function Component34684({ value = 34684, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34684, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34684, 'data-value': derived.doubled }, children);
}
export default Component34684;
