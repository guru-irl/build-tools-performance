import React from 'react';
const LABEL_4862 = 'component_4862';
export function Component4862({ value = 4862, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4862, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4862, 'data-value': derived.doubled }, children);
}
export default Component4862;
