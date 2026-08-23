import React from 'react';
const LABEL_37684 = 'component_37684';
export function Component37684({ value = 37684, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37684, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37684, 'data-value': derived.doubled }, children);
}
export default Component37684;
