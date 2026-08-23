import React from 'react';
const LABEL_36995 = 'component_36995';
export function Component36995({ value = 36995, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36995, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36995, 'data-value': derived.doubled }, children);
}
export default Component36995;
