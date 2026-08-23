import React from 'react';
const LABEL_34862 = 'component_34862';
export function Component34862({ value = 34862, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34862, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34862, 'data-value': derived.doubled }, children);
}
export default Component34862;
