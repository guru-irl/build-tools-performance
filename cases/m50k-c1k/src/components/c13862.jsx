import React from 'react';
const LABEL_13862 = 'component_13862';
export function Component13862({ value = 13862, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13862, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13862, 'data-value': derived.doubled }, children);
}
export default Component13862;
