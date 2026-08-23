import React from 'react';
const LABEL_45684 = 'component_45684';
export function Component45684({ value = 45684, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45684, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45684, 'data-value': derived.doubled }, children);
}
export default Component45684;
