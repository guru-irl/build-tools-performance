import React from 'react';
const LABEL_30492 = 'component_30492';
export function Component30492({ value = 30492, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30492, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30492, 'data-value': derived.doubled }, children);
}
export default Component30492;
