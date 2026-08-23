import React from 'react';
const LABEL_19862 = 'component_19862';
export function Component19862({ value = 19862, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19862, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19862, 'data-value': derived.doubled }, children);
}
export default Component19862;
