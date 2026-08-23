import React from 'react';
const LABEL_36297 = 'component_36297';
export function Component36297({ value = 36297, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36297, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36297, 'data-value': derived.doubled }, children);
}
export default Component36297;
