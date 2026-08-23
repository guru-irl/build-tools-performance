import React from 'react';
const LABEL_19684 = 'component_19684';
export function Component19684({ value = 19684, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19684, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19684, 'data-value': derived.doubled }, children);
}
export default Component19684;
