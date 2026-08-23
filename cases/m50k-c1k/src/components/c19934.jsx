import React from 'react';
const LABEL_19934 = 'component_19934';
export function Component19934({ value = 19934, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19934, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19934, 'data-value': derived.doubled }, children);
}
export default Component19934;
