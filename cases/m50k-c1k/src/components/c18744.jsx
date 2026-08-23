import React from 'react';
const LABEL_18744 = 'component_18744';
export function Component18744({ value = 18744, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18744, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18744, 'data-value': derived.doubled }, children);
}
export default Component18744;
