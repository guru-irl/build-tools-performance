import React from 'react';
const LABEL_5744 = 'component_5744';
export function Component5744({ value = 5744, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5744, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5744, 'data-value': derived.doubled }, children);
}
export default Component5744;
