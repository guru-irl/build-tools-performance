import React from 'react';
const LABEL_41684 = 'component_41684';
export function Component41684({ value = 41684, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41684, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41684, 'data-value': derived.doubled }, children);
}
export default Component41684;
