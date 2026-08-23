import React from 'react';
const LABEL_8684 = 'component_8684';
export function Component8684({ value = 8684, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8684, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8684, 'data-value': derived.doubled }, children);
}
export default Component8684;
