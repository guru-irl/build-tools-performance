import React from 'react';
const LABEL_36744 = 'component_36744';
export function Component36744({ value = 36744, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36744, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36744, 'data-value': derived.doubled }, children);
}
export default Component36744;
